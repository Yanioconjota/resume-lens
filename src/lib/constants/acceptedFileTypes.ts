export const ACCEPTED_MIME_TYPES = {
  'application/pdf': ['.pdf'],
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
  'text/plain': ['.txt'],
} as const;

export const ACCEPTED_EXTENSIONS = ['.pdf', '.docx', '.txt'] as const;

export const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5MB

export const MAX_FILE_SIZE_LABEL = '5MB';

export function isAcceptedFileType(file: File): boolean {
  const extension = '.' + file.name.split('.').pop()?.toLowerCase();
  return ACCEPTED_EXTENSIONS.includes(extension as (typeof ACCEPTED_EXTENSIONS)[number]);
}

export function isWithinSizeLimit(file: File): boolean {
  return file.size <= MAX_FILE_SIZE_BYTES;
}
