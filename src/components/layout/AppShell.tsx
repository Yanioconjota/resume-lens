import type { ReactNode } from 'react';
import { AppHeader } from './AppHeader';
import { cn } from '@/lib/utils/cn';

interface AppShellProps {
  children: ReactNode;
  className?: string;
}

export function AppShell({ children, className }: AppShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader />
      <main className={cn('flex-1', className)}>{children}</main>
      <footer className="border-t border-gray-200 bg-gray-50 py-6">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            ResumeLens — AI-powered resume analysis for engineers
          </p>
        </div>
      </footer>
    </div>
  );
}
