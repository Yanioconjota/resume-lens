import Link from 'next/link';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/Button';
import { Tabs, TabList, TabTrigger, TabContent } from '@/components/ui/Tabs';
import { AnalysisOverview, IssueList, RewriteComparison, RecommendedFormat } from '@/features/resume-analysis';
import { ParsedResumeView } from '@/features/resume-preview';
import { mockAnalysisResult } from '@/test/mocks';

export default function ResultsPage() {
  const { parsedResume, analysis } = mockAnalysisResult;

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <PageHeader
        title="Analysis Results"
        description={`Resume analyzed for ${analysis.targetRole}`}
        actions={
          <Link href="/analyze">
            <Button variant="secondary">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Analyze Another
            </Button>
          </Link>
        }
      />

      <Tabs defaultTab="overview">
        <TabList>
          <TabTrigger value="overview">Overview</TabTrigger>
          <TabTrigger value="parsed">Parsed Resume</TabTrigger>
          <TabTrigger value="issues">
            Issues ({analysis.issues.length})
          </TabTrigger>
          <TabTrigger value="rewrites">
            Rewrites ({analysis.suggestedRewrites.length})
          </TabTrigger>
          <TabTrigger value="format">Recommended Format</TabTrigger>
        </TabList>

        <TabContent value="overview">
          <AnalysisOverview analysis={analysis} />
        </TabContent>

        <TabContent value="parsed">
          <ParsedResumeView resume={parsedResume} />
        </TabContent>

        <TabContent value="issues">
          <IssueList issues={analysis.issues} />
        </TabContent>

        <TabContent value="rewrites">
          <RewriteComparison rewrites={analysis.suggestedRewrites} />
        </TabContent>

        <TabContent value="format">
          <RecommendedFormat format={analysis.recommendedFormat} />
        </TabContent>
      </Tabs>
    </div>
  );
}
