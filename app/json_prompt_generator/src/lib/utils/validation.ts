/**
 * Checks if a value is a non-empty string.
 * @param value The value to check.
 * @returns An error message if invalid, otherwise null.
 */
export const validateRequired = (value: string): string | null => {
  if (!value || value.trim().length === 0) {
    return 'This field is required.';
  }
  return null;
};

/**
 * Checks if a string is a valid JSON.
 * @param value The string to check.
 * @returns An error message if invalid, otherwise null.
 */
export const validateJson = (value: string): string | null => {
  // If the field is empty, we don't validate, as it might not be required.
  // The `validateRequired` function should be used for that.
  if (!value.trim()) {
    return null;
  }
  try {
    JSON.parse(value);
    return null;
  } catch (error) {
    return 'Invalid JSON format. Please check the syntax.';
  }
};

/**
 * Creates a validator that checks for a maximum character length.
 * @param maxLength The maximum allowed length.
 * @returns A validation function that takes a value and returns an error message or null.
 */
export const createMaxLengthValidator = (maxLength: number) => {
  return (value: string): string | null => {
    if (value && value.length > maxLength) {
      return `Input cannot exceed ${maxLength} characters.`;
    }
    return null;
  };
};

// Example usage of the factory for a specific input
export const validateNegativeRequirements = createMaxLengthValidator(500);
