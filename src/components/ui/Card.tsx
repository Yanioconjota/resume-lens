import type { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

interface CardProps {
  children: ReactNode;
  className?: string;
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-gray-200 bg-white shadow-sm',
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={cn('border-b border-gray-100 px-6 py-4', className)}>
      {children}
    </div>
  );
}

export function CardTitle({
  children,
  className,
  as: Component = 'h3',
}: CardTitleProps) {
  return (
    <Component
      className={cn('text-lg font-semibold text-gray-900', className)}
    >
      {children}
    </Component>
  );
}

export function CardContent({ children, className }: CardContentProps) {
  return <div className={cn('px-6 py-4', className)}>{children}</div>;
}
