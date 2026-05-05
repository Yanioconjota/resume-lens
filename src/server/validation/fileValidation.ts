import {
  isAcceptedFileType,
  isWithinSizeLimit,
  MAX_FILE_SIZE_LABEL,
} from '@/lib/constants/acceptedFileTypes';

export interface FileValidationResult {
  valid: boolean;
  error?: {
    code: string;
    message: string;
  };
}

export function validateFile(file: File): FileValidationResult {
  if (!file) {
    return {
      valid: false,
      error: {
        code: 'NO_FILE',
        message: 'No file provided',
      },
    };
  }

  if (!isWithinSizeLimit(file)) {
    return {
      valid: false,
      error: {
        code: 'FILE_TOO_LARGE',
        message: `File size exceeds ${MAX_FILE_SIZE_LABEL} limit`,
      },
    };
  }

  if (!isAcceptedFileType(file)) {
    return {
      valid: false,
      error: {
        code: 'INVALID_FILE_TYPE',
        message: 'File type not supported. Please upload a PDF, DOCX, or TXT file.',
      },
    };
  }

  return { valid: true };
}
