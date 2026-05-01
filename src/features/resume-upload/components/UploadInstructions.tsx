import {
  ACCEPTED_EXTENSIONS,
  MAX_FILE_SIZE_LABEL,
} from '@/lib/constants/acceptedFileTypes';

export function UploadInstructions() {
  return (
    <div className="text-center">
      <p className="text-sm text-gray-500">
        Supported formats:{' '}
        <span className="font-medium text-gray-700">
          {ACCEPTED_EXTENSIONS.map((ext) => ext.toUpperCase().replace('.', '')).join(', ')}
        </span>
      </p>
      <p className="text-sm text-gray-500">
        Maximum file size:{' '}
        <span className="font-medium text-gray-700">{MAX_FILE_SIZE_LABEL}</span>
      </p>
    </div>
  );
}
