/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { message, userId } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant for PR-Connect, a PR agency specializing in media relations, crisis management, and QR marketing." },
        { role: "user", content: message }
      ],
    });

    const reply = completion.choices[0].message.content;

    // Here you would typically log the conversation to your CRM
    // For example: await logToCRM(userId, message, reply);

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}