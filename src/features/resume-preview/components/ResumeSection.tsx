import type { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

interface ResumeSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function ResumeSection({ title, children, className }: ResumeSectionProps) {
  return (
    <section className={cn('space-y-3', className)}>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
        {title}
      </h3>
      <div>{children}</div>
    </section>
  );
}
