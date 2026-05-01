import type { RecommendedFormat as RecommendedFormatType } from '@/types/analysis';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

interface RecommendedFormatProps {
  format: RecommendedFormatType;
}

export function RecommendedFormat({ format }: RecommendedFormatProps) {
  return (
    <div className="space-y-6">
      {/* Recommended Sections */}
      <Card>
        <CardHeader>
          <CardTitle>Recommended Section Order</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="space-y-2">
            {format.sections.map((section, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-sm"
              >
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-medium text-gray-600">
                  {index + 1}
                </span>
                <span className="text-gray-700">{section}</span>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      {/* Format Notes */}
      {format.notes.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Formatting Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {format.notes.map((note, index) => (
                <li key={index} className="flex gap-3 text-sm">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-700">{note}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
