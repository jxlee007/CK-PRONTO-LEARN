import {
  ApiRequestBody,
  ApiError,
  OpenRouterSuccessData
} from './types';

// Define a type for the return value of our client
type OpenRouterResponse = {
  success: true;
  data: OpenRouterSuccessData;
} | {
  success: false;
  error: ApiError;
};

/**
 * Calls our backend proxy to get a response from the OpenRouter API.
 *
 * @param body The request payload containing the prompt and other parameters.
 * @returns A promise that resolves to a success or error object.
 */
export const callOpenRouter = async (body: ApiRequestBody): Promise<OpenRouterResponse> => {
  try {
    const response = await fetch('/api/openrouter-proxy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      // Try to parse error details from the response body
      const errorData = await response.json().catch(() => null); // Gracefully handle non-JSON responses
      return {
        success: false,
        error: {
          message: errorData?.error?.message || `Request failed with status: ${response.status}`,
          code: response.status,
          details: errorData,
        },
      };
    }

    const data: OpenRouterSuccessData = await response.json();

    return {
      success: true,
      data,
    };
  } catch (error) {
    // Handle network errors or other exceptions during fetch
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return {
      success: false,
      error: {
        message: errorMessage,
      },
    };
  }
};
