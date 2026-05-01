import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

const FEATURES = [
  {
    title: 'AI-Powered Analysis',
    description:
      'Get intelligent feedback on your resume structure, content, and impact using advanced AI.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: 'Role-Specific Feedback',
    description:
      'Tailored suggestions based on your target role: Frontend, React/Next.js, Angular, or Full Stack.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Actionable Rewrites',
    description:
      'Receive concrete before/after examples to immediately improve your resume impact.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    ),
  },
];

const SUPPORTED_FORMATS = [
  { format: 'PDF', icon: '📄' },
  { format: 'DOCX', icon: '📝' },
  { format: 'TXT', icon: '📃' },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Land Your Next{' '}
              <span className="text-blue-600">Engineering Role</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Upload your resume and get AI-powered feedback tailored to your target
              role. Receive actionable suggestions, concrete rewrites, and
              formatting tips to stand out.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/analyze">
                <Button size="lg">
                  Analyze My Resume
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Button>
              </Link>
              <Link href="/results">
                <Button variant="secondary" size="lg">
                  View Sample Results
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              How ResumeLens Helps You
            </h2>
            <p className="mt-4 text-gray-600">
              Get comprehensive feedback to make your resume interview-ready
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <Card key={feature.title}>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Formats */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Supported Formats
            </h2>
            <p className="mt-4 text-gray-600">
              Upload your resume in any of these formats
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {SUPPORTED_FORMATS.map(({ format, icon }) => (
              <div
                key={format}
                className="flex items-center gap-2 rounded-full bg-white px-6 py-3 shadow-sm"
              >
                <span className="text-2xl">{icon}</span>
                <span className="font-medium text-gray-700">{format}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-blue-600 px-6 py-12 text-center sm:px-12">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to Improve Your Resume?
            </h2>
            <p className="mt-4 text-blue-100">
              Get personalized feedback in seconds. No sign-up required.
            </p>
            <div className="mt-8">
              <Link href="/analyze">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                >
                  Get Started Free
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
