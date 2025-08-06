import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import logger from '@/lib/logger'

export async function GET() {
  try {
    // Check environment variables
    if (!process.env.MONGODB_URI) {
      return NextResponse.json({ 
        status: 'error',
        message: 'MONGODB_URI environment variable is not set',
        env: process.env.NODE_ENV
      }, { status: 500 })
    }

    // Try to connect to database
    await dbConnect()
    
    return NextResponse.json({ 
      status: 'success',
      message: 'Database connection successful',
      env: process.env.NODE_ENV
    }, { status: 200 })

  } catch (error) {
    logger.error('Database connection test failed', { 
      error: error instanceof Error ? error.message : error,
      stack: error instanceof Error ? error.stack : undefined
    })

    return NextResponse.json({ 
      status: 'error',
      message: 'Database connection failed',
      error: error instanceof Error ? error.message : 'Unknown error',
      env: process.env.NODE_ENV
    }, { status: 500 })
  }
} 