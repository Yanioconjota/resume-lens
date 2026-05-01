import Link from 'next/link';
import { cn } from '@/lib/utils/cn';

interface AppHeaderProps {
  className?: string;
}

export function AppHeader({ className }: AppHeaderProps) {
  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80',
        className
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
          >
            <svg
              className="h-7 w-7 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            ResumeLens
          </Link>

          <nav className="flex items-center gap-4">
            <Link
              href="/analyze"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Analyze Resume
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
