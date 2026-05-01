'use client';

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react';
import { cn } from '@/lib/utils/cn';

interface TabsContextValue {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be used within a Tabs provider');
  }
  return context;
}

interface TabsProps {
  children: ReactNode;
  defaultTab: string;
  className?: string;
}

interface TabListProps {
  children: ReactNode;
  className?: string;
}

interface TabTriggerProps {
  children: ReactNode;
  value: string;
  className?: string;
}

interface TabContentProps {
  children: ReactNode;
  value: string;
  className?: string;
}

export function Tabs({ children, defaultTab, className }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabList({ children, className }: TabListProps) {
  return (
    <div
      role="tablist"
      className={cn(
        'flex gap-1 border-b border-gray-200 overflow-x-auto',
        className
      )}
    >
      {children}
    </div>
  );
}

export function TabTrigger({ children, value, className }: TabTriggerProps) {
  const { activeTab, setActiveTab } = useTabsContext();
  const isActive = activeTab === value;

  return (
    <button
      role="tab"
      aria-selected={isActive}
      onClick={() => setActiveTab(value)}
      className={cn(
        'px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-colors',
        'border-b-2 -mb-px',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
        isActive
          ? 'border-blue-600 text-blue-600'
          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
        className
      )}
    >
      {children}
    </button>
  );
}

export function TabContent({ children, value, className }: TabContentProps) {
  const { activeTab } = useTabsContext();

  if (activeTab !== value) {
    return null;
  }

  return (
    <div role="tabpanel" className={cn('py-4', className)}>
      {children}
    </div>
  );
}
