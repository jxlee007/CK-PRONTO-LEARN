import { useState, useCallback, useRef, useEffect } from 'react';
import { callOpenRouter } from '../lib/api/openrouter';
import { ApiRequestBody, OpenRouterSuccessData, ApiError } from '../lib/api/types';

// The state structure managed by the hook
interface ApiRequestState {
  data: OpenRouterSuccessData | null;
  loading: boolean;
  error: ApiError | null;
}

/**
 * A custom hook to handle API requests.
 * It manages loading, error, and data states, and provides a function to trigger the request.
 * It also handles cancellation of requests on component unmount.
 */
export const useApiRequest = () => {
  const [state, setState] = useState<ApiRequestState>({
    data: null,
    loading: false,
    error: null,
  });

  // Use a ref to track if the component is mounted
  const isMounted = useRef(true);
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const call = useCallback(async (body: ApiRequestBody) => {
    // No need to check isMounted here, as we want the request to proceed.
    // We only check before setting state.
    setState({ data: null, loading: true, error: null });

    const response = await callOpenRouter(body);

    if (isMounted.current) {
      if (response.success) {
        setState({ data: response.data, loading: false, error: null });
      } else {
        setState({ data: null, loading: false, error: response.error });
      }
    }
  }, []);

  return { ...state, call };
};
