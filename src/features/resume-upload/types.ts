export interface FileValidationError {
  type: 'invalid-type' | 'file-too-large' | 'no-file';
  message: string;
}

export interface UploadState {
  file: File | null;
  isDragging: boolean;
  error: FileValidationError | null;
  isUploading: boolean;
}
