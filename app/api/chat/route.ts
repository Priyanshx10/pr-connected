import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// TypeScript interfaces for strong typing
interface ChatRequest {
  message: string;
  userId: string;
  conversationId?: string;
  context?: string[];
}

interface ChatResponse {
  reply: string;
  conversationId?: string;
  suggestedActions?: string[];
}

export async function POST(req: Request) {
  try {
    const { message, userId, conversationId, context = [] }: ChatRequest = await req.json();

    // Validate input
    if (!message?.trim()) {
      return NextResponse.json(
        { error: 'Message is required' }, 
        { status: 400 }
      );
    }

    // Build conversation history
    const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
      {
        role: "system",
        content: `You are PR-Bot, the AI assistant for PR-Connect - a premier brand amplification agency. 
        Our specialties include:
        - Strategic media placements
        - Crisis communication management
        - QR-powered marketing campaigns
        - Digital PR and influencer partnerships
        - Brand positioning and messaging
        
        Tone Guidelines:
        - Professional yet approachable
        - Data-driven insights
        - Focused on ROI and measurable results
        - Always suggest next steps for brand growth`
      },
      ...context.map(msg => ({
        role: "assistant" as const,
        content: msg
      })),
      { role: "user", content: message }
    ];

    // Generate AI response
    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo", // Upgraded model for better performance
      messages,
      temperature: 0.7, // Balanced creativity/focus
      max_tokens: 500,
      response_format: { type: "json_object" } // Structured response
    });

    const responseContent = completion.choices[0].message.content;
    let reply: string;
    let suggestedActions: string[] = [];

    try {
      // Parse structured response if possible
      const parsedResponse = JSON.parse(responseContent || '{}');
      reply = parsedResponse.reply || responseContent;
      suggestedActions = parsedResponse.suggestedActions || [];
    } catch {
      reply = responseContent || "I couldn't generate a response. Please try again.";
    }

    // Log interaction to analytics/CRM
    await logInteraction({
      userId,
      conversationId: conversationId || generateConversationId(),
      userMessage: message,
      botResponse: reply,
      timestamp: new Date().toISOString()
    });

    const response: ChatResponse = {
      reply,
      conversationId: conversationId || generateConversationId(),
      suggestedActions
    };

    return NextResponse.json(response);

  } catch (error) {
    console.error('PR-Connect Chat API Error:', error);
    return NextResponse.json(
      { 
        error: 'Our brand experts are currently unavailable. For immediate assistance, please email support@pr-connect.com',
        fallbackAction: 'contact_support'
      }, 
      { status: 500 }
    );
  }
}

// Helper functions (implement according to your infrastructure)
async function logInteraction(data: {
  userId: string;
  conversationId: string;
  userMessage: string;
  botResponse: string;
  timestamp: string;
}) {
  // Implementation for your analytics/CRM system
  // Example: await prisma.chatInteraction.create({ data });
}

function generateConversationId(): string {
  return Math.random().toString(36).substring(2, 15);
}