import { Card, CardContent } from '@/components/ui/Card';

interface SuggestionCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export function SuggestionCard({ title, description, icon }: SuggestionCardProps) {
  return (
    <Card>
      <CardContent className="py-4">
        <div className="flex gap-3">
          {icon && (
            <div className="flex-shrink-0 text-blue-600">{icon}</div>
          )}
          <div>
            <h4 className="font-medium text-gray-900">{title}</h4>
            <p className="mt-1 text-sm text-gray-600">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
