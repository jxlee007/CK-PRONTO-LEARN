// A simple in-memory store for rate limiting.
// In a real production environment, you would use a more persistent store like Redis.
const rateLimitStore = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 15;

exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: { message: 'Method Not Allowed' } }),
    };
  }

  // --- Rate Limiting ---
  const ip = event.headers['x-nf-client-connection-ip'] || '127.0.0.1';
  const now = Date.now();
  const userRequests = (rateLimitStore.get(ip) || []).filter(
    (timestamp) => timestamp > now - RATE_LIMIT_WINDOW_MS
  );

  if (userRequests.length >= MAX_REQUESTS_PER_WINDOW) {
    return {
      statusCode: 429,
      body: JSON.stringify({ error: { message: 'Too many requests. Please try again later.' } }),
    };
  }
  rateLimitStore.set(ip, [...userRequests, now]);
  // --- End Rate Limiting ---

  const { body } = event;
  const apiKey = process.env.OPENROUTER_API_KEY;

  if (!apiKey) {
    console.error('OPENROUTER_API_KEY is not set in environment variables.');
    return {
      statusCode: 500,
      body: JSON.stringify({ error: { message: 'API key is not configured on the server.' } }),
    };
  }

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: body,
    });

    const responseBody = await response.text();

    // Pass through the status and body from the OpenRouter API
    return {
      statusCode: response.status,
      body: responseBody,
      headers: {
        'Content-Type': response.headers.get('Content-Type') || 'application/json',
      },
    };

  } catch (error) {
    console.error('Error proxying request to OpenRouter:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: { message: 'An internal server error occurred while contacting the API provider.' } }),
    };
  }
};
