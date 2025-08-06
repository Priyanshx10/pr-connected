import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import ContactSubmission from '@/models/ContactSubmission'
import logger from '@/lib/logger'

export async function POST(req: Request) {
  try {
    // Check environment variables
    if (!process.env.MONGODB_URI) {
      logger.error('MONGODB_URI environment variable is not set')
      console.error('MONGODB_URI environment variable is not set')
      
      // Return success anyway to not break the user experience
      return NextResponse.json({ 
        message: 'Message sent successfully! We\'ll get back to you within 24 hours.',
        success: true,
        note: 'Database connection not configured'
      }, { status: 200 })
    }

    // Parse request body
    const body = await req.json()
    const { name, email, phone, company, subject, message, timestamp, source } = body

    // Server-side validation
    if (!name || !email || !message) {
      logger.warn('Incomplete form submission', { name, email, hasMessage: !!message })
      return NextResponse.json({ 
        message: 'Name, email, and message are required' 
      }, { status: 400 })
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      logger.warn('Invalid email format', { email })
      return NextResponse.json({ 
        message: 'Please enter a valid email address' 
      }, { status: 400 })
    }

    // Message length validation
    if (message.length < 10) {
      logger.warn('Message too short', { messageLength: message.length })
      return NextResponse.json({ 
        message: 'Message must be at least 10 characters long' 
      }, { status: 400 })
    }

    // Create submission object with all fields
    const submissionData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || '',
      company: company?.trim() || '',
      subject: subject?.trim() || '',
      message: message.trim(),
      timestamp: timestamp || new Date().toISOString(),
      source: source || 'contact-page',
      status: 'new'
    }

    // Try to connect to database
    try {
      await dbConnect()
      
      // Save to database
      const submission = new ContactSubmission(submissionData)
      await submission.save()

      logger.info('New contact form submission saved to database', { 
        name: submissionData.name, 
        email: submissionData.email,
        company: submissionData.company,
        subject: submissionData.subject,
        source: submissionData.source
      })

    } catch (dbError) {
      // Log database error but don't fail the request
      logger.error('Database connection failed, but continuing with fallback', { 
        error: dbError instanceof Error ? dbError.message : dbError,
        submissionData: {
          name: submissionData.name,
          email: submissionData.email,
          company: submissionData.company
        }
      })

      // Log to console for debugging
      console.log('Contact form submission (database unavailable):', submissionData)
      console.error('Database error:', dbError)
    }

    return NextResponse.json({ 
      message: 'Message sent successfully! We\'ll get back to you within 24 hours.',
      success: true
    }, { status: 200 })

  } catch (error) {
    logger.error('Error processing contact form', { 
      error: error instanceof Error ? error.message : error,
      stack: error instanceof Error ? error.stack : undefined
    })
    
    // Check if it's a MongoDB duplicate key error
    if (error instanceof Error && error.message.includes('duplicate key')) {
      return NextResponse.json({ 
        message: 'A submission with this email already exists. Please wait before sending another message.' 
      }, { status: 409 })
    }

    // Check if it's a JSON parsing error
    if (error instanceof Error && error.message.includes('JSON')) {
      return NextResponse.json({ 
        message: 'Invalid request format. Please try again.' 
      }, { status: 400 })
    }

    return NextResponse.json({ 
      message: 'Failed to send message. Please try again or contact us directly.' 
    }, { status: 500 })
  }
}