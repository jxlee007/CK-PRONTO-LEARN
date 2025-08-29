// A generic structure for API error responses
export interface ApiError {
  message: string;
  code?: number;
  details?: unknown;
}

// A generic structure for successful API responses
export interface ApiResponse<T> {
  data: T;
  success: true;
}

// The request payload sent to our Netlify proxy function
export interface ApiRequestBody {
  prompt: string;
  // Other potential parameters for the prompt
  model?: string;
  temperature?: number;
  max_tokens?: number;
}

// The expected successful response data from the OpenRouter API (or our proxy)
// This is a guess, but a common pattern is a choices array.
export interface OpenRouterSuccessData {
  choices: {
    message: {
      content: string;
    };
  }[];
}
