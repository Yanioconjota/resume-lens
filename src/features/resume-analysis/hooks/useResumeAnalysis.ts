'use client';

import { useState, useCallback } from 'react';
import type { AnalysisResult } from '@/types/analysis';
import type { TargetRole } from '@/lib/constants/targetRoles';

interface UseResumeAnalysisState {
  result: AnalysisResult | null;
  isLoading: boolean;
  error: string | null;
}

export function useResumeAnalysis() {
  const [state, setState] = useState<UseResumeAnalysisState>({
    result: null,
    isLoading: false,
    error: null,
  });

  const analyze = useCallback(async (file: File, targetRole: TargetRole) => {
    setState({ result: null, isLoading: true, error: null });

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('targetRole', targetRole);

      const response = await fetch('/api/analyze-resume', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.error?.message || `Analysis failed with status ${response.status}`
        );
      }

      const result: AnalysisResult = await response.json();
      setState({ result, isLoading: false, error: null });
      return result;
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'An unexpected error occurred';
      setState({ result: null, isLoading: false, error: message });
      throw error;
    }
  }, []);

  const reset = useCallback(() => {
    setState({ result: null, isLoading: false, error: null });
  }, []);

  return {
    ...state,
    analyze,
    reset,
  };
}
