'use client';

import { cn } from '@/lib/utils/cn';
import {
  TARGET_ROLES,
  TARGET_ROLE_DESCRIPTIONS,
  type TargetRole,
} from '../constants';

interface TargetRoleSelectorProps {
  value: TargetRole | null;
  onChange: (role: TargetRole) => void;
  className?: string;
}

export function TargetRoleSelector({
  value,
  onChange,
  className,
}: TargetRoleSelectorProps) {
  return (
    <div className={cn('space-y-3', className)}>
      <label className="block text-sm font-medium text-gray-700">
        Select your target role
      </label>
      <div className="grid gap-3 sm:grid-cols-2">
        {TARGET_ROLES.map((role) => {
          const isSelected = value === role;
          return (
            <button
              key={role}
              type="button"
              onClick={() => onChange(role)}
              className={cn(
                'relative flex flex-col items-start gap-1 rounded-lg border-2 p-4 text-left transition-all',
                'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
                isSelected
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
              )}
            >
              <span
                className={cn(
                  'font-medium',
                  isSelected ? 'text-blue-900' : 'text-gray-900'
                )}
              >
                {role}
              </span>
              <span
                className={cn(
                  'text-sm',
                  isSelected ? 'text-blue-700' : 'text-gray-500'
                )}
              >
                {TARGET_ROLE_DESCRIPTIONS[role]}
              </span>
              {isSelected && (
                <div className="absolute right-3 top-3">
                  <svg
                    className="h-5 w-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
