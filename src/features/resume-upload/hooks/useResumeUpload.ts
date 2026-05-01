'use client';

import { useState, useCallback } from 'react';
import {
  isAcceptedFileType,
  isWithinSizeLimit,
  MAX_FILE_SIZE_LABEL,
  ACCEPTED_EXTENSIONS,
} from '@/lib/constants/acceptedFileTypes';
import type { FileValidationError, UploadState } from '../types';

export function useResumeUpload() {
  const [state, setState] = useState<UploadState>({
    file: null,
    isDragging: false,
    error: null,
    isUploading: false,
  });

  const validateFile = useCallback((file: File): FileValidationError | null => {
    if (!isAcceptedFileType(file)) {
      return {
        type: 'invalid-type',
        message: `Invalid file type. Accepted formats: ${ACCEPTED_EXTENSIONS.join(', ')}`,
      };
    }

    if (!isWithinSizeLimit(file)) {
      return {
        type: 'file-too-large',
        message: `File is too large. Maximum size: ${MAX_FILE_SIZE_LABEL}`,
      };
    }

    return null;
  }, []);

  const handleFile = useCallback(
    (file: File) => {
      const error = validateFile(file);

      setState((prev) => ({
        ...prev,
        file: error ? null : file,
        error,
        isDragging: false,
      }));
    },
    [validateFile]
  );

  const handleDragEnter = useCallback(() => {
    setState((prev) => ({ ...prev, isDragging: true }));
  }, []);

  const handleDragLeave = useCallback(() => {
    setState((prev) => ({ ...prev, isDragging: false }));
  }, []);

  const handleDrop = useCallback(
    (files: FileList | null) => {
      if (files && files.length > 0) {
        handleFile(files[0]);
      }
    },
    [handleFile]
  );

  const clearFile = useCallback(() => {
    setState({
      file: null,
      isDragging: false,
      error: null,
      isUploading: false,
    });
  }, []);

  const setUploading = useCallback((isUploading: boolean) => {
    setState((prev) => ({ ...prev, isUploading }));
  }, []);

  const setError = useCallback((error: FileValidationError | null) => {
    setState((prev) => ({ ...prev, error }));
  }, []);

  return {
    ...state,
    handleFile,
    handleDragEnter,
    handleDragLeave,
    handleDrop,
    clearFile,
    setUploading,
    setError,
  };
}
