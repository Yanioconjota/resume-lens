import type { TargetRole } from '@/lib/constants/targetRoles';
import type { AnalysisResult } from './analysis';

export interface AnalyzeResumeRequest {
  file: File;
  targetRole: TargetRole;
}

export type AnalyzeResumeResponse = AnalysisResult;

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, string>;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ApiError;
}
