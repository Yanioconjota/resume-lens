import type { Analysis } from '@/types/analysis';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

interface AnalysisOverviewProps {
  analysis: Analysis;
}

export function AnalysisOverview({ analysis }: AnalysisOverviewProps) {
  const highSeverityCount = analysis.issues.filter(
    (i) => i.severity === 'high'
  ).length;
  const mediumSeverityCount = analysis.issues.filter(
    (i) => i.severity === 'medium'
  ).length;

  return (
    <div className="space-y-6">
      {/* Target Role */}
      <Card>
        <CardContent className="py-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Target Role</span>
            <Badge variant="info">{analysis.targetRole}</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="py-4 text-center">
            <p className="text-2xl font-bold text-green-600">
              {analysis.strengths.length}
            </p>
            <p className="text-sm text-gray-500">Strengths</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="py-4 text-center">
            <p className="text-2xl font-bold text-yellow-600">
              {analysis.issues.length}
            </p>
            <p className="text-sm text-gray-500">Issues Found</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="py-4 text-center">
            <p className="text-2xl font-bold text-blue-600">
              {analysis.suggestedRewrites.length}
            </p>
            <p className="text-sm text-gray-500">Suggested Rewrites</p>
          </CardContent>
        </Card>
      </div>

      {/* Issue Severity Breakdown */}
      {(highSeverityCount > 0 || mediumSeverityCount > 0) && (
        <Card>
          <CardHeader>
            <CardTitle>Issue Severity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              {highSeverityCount > 0 && (
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="text-sm text-gray-600">
                    {highSeverityCount} High Priority
                  </span>
                </div>
              )}
              {mediumSeverityCount > 0 && (
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-yellow-500" />
                  <span className="text-sm text-gray-600">
                    {mediumSeverityCount} Medium Priority
                  </span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Strengths */}
      <Card>
        <CardHeader>
          <CardTitle>Strengths</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {analysis.strengths.map((strength, index) => (
              <li key={index} className="flex gap-3 text-sm">
                <svg
                  className="h-5 w-5 flex-shrink-0 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">{strength}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* High Impact Fixes */}
      {analysis.highImpactFixes.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>High-Impact Fixes</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3">
              {analysis.highImpactFixes.map((fix, index) => (
                <li key={index} className="flex gap-3 text-sm">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-medium text-blue-600">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 pt-0.5">{fix}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
