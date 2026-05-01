export type JsonParseResult<T> =
  | { success: true; data: T }
  | { success: false; error: Error };

export function safeJsonParse<T = unknown>(json: string): JsonParseResult<T> {
  try {
    const data = JSON.parse(json) as T;
    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error : new Error('Failed to parse JSON'),
    };
  }
}
