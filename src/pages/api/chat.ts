export const prerender = false;

import type { APIRoute } from 'astro';

// Simple in-memory rate limiting (IP -> timestamps)
// Note: In a serverless environment like Vercel, memory is not shared across instances.
// This is a basic protection mechanism. For strict rate limiting, use Redis.
const rateLimitCache = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

// Fallback to environment variable for Groq API key
// Use process.env for runtime Vercel variables, import.meta.env for local dev
const GROQ_API_KEY = (typeof process !== 'undefined' ? process.env.GROQ_API_KEY : '') || import.meta.env.GROQ_API_KEY || '';
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const MODEL_NAME = 'llama-3.1-8b-instant'; // A fast and capable Groq model

export const POST: APIRoute = async ({ request, clientAddress }) => {
  try {
    // 1. Rate Limiting Check
    const ip = clientAddress || 'unknown';
    const now = Date.now();
    const timestamps = rateLimitCache.get(ip) || [];
    const recentRequests = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW);
    
    if (recentRequests.length >= MAX_REQUESTS_PER_WINDOW) {
      return new Response(
        JSON.stringify({ response: 'Too many requests. Please try again in a minute.' }), 
        { status: 429, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    recentRequests.push(now);
    rateLimitCache.set(ip, recentRequests);

    // 2. Input Validation
    const body = await request.json();
    let userInput = '';
    
    if (body.message && typeof body.message === 'string') {
      userInput = body.message.trim();
    } else if (body.messages && Array.isArray(body.messages)) {
      const lastMessage = body.messages[body.messages.length - 1];
      if (lastMessage && typeof lastMessage.content === 'string') {
        userInput = lastMessage.content.trim();
      }
    }
    
    if (!userInput || userInput.length > 1000) {
      return new Response(
        JSON.stringify({ response: 'Invalid or overly long message.' }), 
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!GROQ_API_KEY) {
      return new Response(
        JSON.stringify({ response: 'Chatbot is currently disabled (Missing API Key).' }), 
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 3. Groq API Call
    const groqResponse = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: MODEL_NAME,
        messages: [
          {
            role: 'system',
            content: 'You are Devashish Pillay\'s personal AI assistant on his portfolio website. You are helpful, concise, and professional.'
          },
          {
            role: 'user',
            content: userInput
          }
        ],
        temperature: 0.7,
        max_tokens: 500,
      })
    });
    
    if (!groqResponse.ok) {
      const errText = await groqResponse.text();
      console.error(`Groq API error: ${groqResponse.status} - ${errText}`);
      throw new Error(`Groq API error: ${groqResponse.statusText} - ${errText}`);
    }
    
    const data = await groqResponse.json();
    const botReply = data.choices?.[0]?.message?.content || 'I did not understand that.';
    
    return new Response(
      JSON.stringify({ response: botReply }), 
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err: any) {
    console.error('Chatbot API Error:', err);
    return new Response(
      JSON.stringify({ 
        response: '⚠️ Something went wrong with the assistant. Please try again later.'
      }), 
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
