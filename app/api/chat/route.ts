import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function GET() {
  return NextResponse.json({ message: 'Hello, World!' });
}

export async function POST(req: Request) {
  try {
    if (!req.headers.get('Content-Type')?.includes('application/json')) {
      return NextResponse.json({ error: 'Invalid request format' }, { status: 400 });
    }

    const { message, userId } = await req.json();

    if (!message || !userId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant for PR-Connect, a PR agency specializing in media relations, crisis management, and QR marketing." },
        { role: "user", content: message }
      ],
    });

    if (!completion.choices || completion.choices.length === 0) {
      return NextResponse.json({ error: 'No response from OpenAI' }, { status: 500 });
    }

    const reply = completion.choices[0].message.content;

    // Here you would typically log the conversation to your CRM
    // For example: await logToCRM(userId, message, reply);

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}