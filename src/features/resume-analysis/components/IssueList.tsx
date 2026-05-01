import type { Issue } from '@/types/analysis';
import { Card, CardContent } from '@/components/ui/Card';
import { SeverityBadge } from '@/components/ui/Badge';

interface IssueListProps {
  issues: Issue[];
}

export function IssueList({ issues }: IssueListProps) {
  if (issues.length === 0) {
    return (
      <Card>
        <CardContent className="py-8 text-center">
          <p className="text-gray-500">No issues found. Great job!</p>
        </CardContent>
      </Card>
    );
  }

  const sortedIssues = [...issues].sort((a, b) => {
    const severityOrder = { high: 0, medium: 1, low: 2 };
    return severityOrder[a.severity] - severityOrder[b.severity];
  });

  return (
    <div className="space-y-4">
      {sortedIssues.map((issue, index) => (
        <Card key={index}>
          <CardContent className="py-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1 space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <SeverityBadge severity={issue.severity} />
                  <span className="text-sm font-medium text-gray-500">
                    {issue.section}
                  </span>
                </div>
                <p className="text-gray-900">{issue.message}</p>
                <div className="rounded-lg bg-blue-50 p-3">
                  <p className="text-sm text-blue-800">
                    <span className="font-medium">Recommendation:</span>{' '}
                    {issue.recommendation}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
