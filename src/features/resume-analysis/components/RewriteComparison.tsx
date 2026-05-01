import type { SuggestedRewrite } from '@/types/analysis';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

interface RewriteComparisonProps {
  rewrites: SuggestedRewrite[];
}

export function RewriteComparison({ rewrites }: RewriteComparisonProps) {
  if (rewrites.length === 0) {
    return (
      <Card>
        <CardContent className="py-8 text-center">
          <p className="text-gray-500">No rewrites suggested.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {rewrites.map((rewrite, index) => (
        <Card key={index}>
          <CardHeader>
            <div className="flex items-center gap-2">
              <CardTitle as="h4">Rewrite #{index + 1}</CardTitle>
              <Badge variant="default">{rewrite.section}</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 lg:grid-cols-2">
              <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-red-600">
                  Original
                </p>
                <p className="text-sm text-gray-700">{rewrite.original}</p>
              </div>
              <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-green-600">
                  Improved
                </p>
                <p className="text-sm text-gray-700">{rewrite.improved}</p>
              </div>
            </div>
            <div className="rounded-lg bg-gray-50 p-3">
              <p className="text-sm text-gray-600">
                <span className="font-medium text-gray-700">Why this change:</span>{' '}
                {rewrite.reason}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
