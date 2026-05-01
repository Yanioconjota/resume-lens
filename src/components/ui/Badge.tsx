import type { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-gray-100 text-gray-700',
  success: 'bg-green-100 text-green-700',
  warning: 'bg-yellow-100 text-yellow-700',
  error: 'bg-red-100 text-red-700',
  info: 'bg-blue-100 text-blue-700',
};

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

export function SeverityBadge({
  severity,
  className,
}: {
  severity: 'low' | 'medium' | 'high';
  className?: string;
}) {
  const variantMap: Record<typeof severity, BadgeVariant> = {
    low: 'info',
    medium: 'warning',
    high: 'error',
  };

  const labelMap: Record<typeof severity, string> = {
    low: 'Low',
    medium: 'Medium',
    high: 'High',
  };

  return (
    <Badge variant={variantMap[severity]} className={className}>
      {labelMap[severity]}
    </Badge>
  );
}
