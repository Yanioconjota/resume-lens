'use client';

import { useRef, type DragEvent, type ChangeEvent } from 'react';
import { cn } from '@/lib/utils/cn';
import { formatFileSize } from '@/lib/utils/formatFileSize';
import { ACCEPTED_EXTENSIONS } from '@/lib/constants/acceptedFileTypes';
import { UploadInstructions } from './UploadInstructions';
import { FileValidationMessage } from './FileValidationMessage';
import type { FileValidationError } from '../types';

interface ResumeDropzoneProps {
  file: File | null;
  isDragging: boolean;
  error: FileValidationError | null;
  onDragEnter: () => void;
  onDragLeave: () => void;
  onDrop: (files: FileList | null) => void;
  onFileSelect: (file: File) => void;
  onClear: () => void;
  className?: string;
}

export function ResumeDropzone({
  file,
  isDragging,
  error,
  onDragEnter,
  onDragLeave,
  onDrop,
  onFileSelect,
  onClear,
  className,
}: ResumeDropzoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragEnter = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onDragEnter();
  };

  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onDragLeave();
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onDrop(e.dataTransfer.files);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      onFileSelect(files[0]);
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  if (file) {
    return (
      <div className={cn('space-y-3', className)}>
        <div className="flex items-center gap-4 rounded-lg border border-green-200 bg-green-50 p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
            <svg
              className="h-5 w-5 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="truncate font-medium text-gray-900">{file.name}</p>
            <p className="text-sm text-gray-500">{formatFileSize(file.size)}</p>
          </div>
          <button
            type="button"
            onClick={onClear}
            className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
            aria-label="Remove file"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('space-y-3', className)}>
      <div
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick();
          }
        }}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={cn(
          'relative flex flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed p-8 transition-colors cursor-pointer',
          'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
          isDragging
            ? 'border-blue-500 bg-blue-50'
            : 'border-gray-300 bg-gray-50 hover:border-gray-400 hover:bg-gray-100'
        )}
      >
        <input
          ref={inputRef}
          type="file"
          accept={ACCEPTED_EXTENSIONS.join(',')}
          onChange={handleInputChange}
          className="sr-only"
          aria-label="Upload resume file"
        />

        <div
          className={cn(
            'flex h-12 w-12 items-center justify-center rounded-full',
            isDragging ? 'bg-blue-100' : 'bg-gray-200'
          )}
        >
          <svg
            className={cn(
              'h-6 w-6',
              isDragging ? 'text-blue-600' : 'text-gray-500'
            )}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
        </div>

        <div className="text-center">
          <p className="text-sm font-medium text-gray-700">
            {isDragging ? (
              'Drop your resume here'
            ) : (
              <>
                <span className="text-blue-600">Click to upload</span> or drag
                and drop
              </>
            )}
          </p>
        </div>

        <UploadInstructions />
      </div>

      {error && <FileValidationMessage error={error} />}
    </div>
  );
}
