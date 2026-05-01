const UNITS = ['B', 'KB', 'MB', 'GB'] as const;

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 B';

  const exponent = Math.min(
    Math.floor(Math.log(bytes) / Math.log(1024)),
    UNITS.length - 1
  );
  const value = bytes / Math.pow(1024, exponent);
  const unit = UNITS[exponent];

  return `${value.toFixed(exponent > 0 ? 1 : 0)} ${unit}`;
}
