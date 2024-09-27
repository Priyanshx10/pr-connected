import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import ContactSubmission from '@/models/ContactSubmission'

export async function POST(req: Request) {
  try {
    await dbConnect()

    const body = await req.json()
    const { name, email, message } = body

    // Server-side validation
    if (!name || !email || !message) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 })
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ message: 'Invalid email format' }, { status: 400 })
    }

    // Save to database
    const submission = new ContactSubmission({ name, email, message })
    await submission.save()

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json({ message: 'Error sending message' }, { status: 500 })
  }
}