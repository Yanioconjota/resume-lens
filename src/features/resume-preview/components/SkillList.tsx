import { Badge } from '@/components/ui/Badge';

interface SkillListProps {
  skills: string[];
}

export function SkillList({ skills }: SkillListProps) {
  if (skills.length === 0) {
    return <p className="text-sm text-gray-500">No skills listed</p>;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <Badge key={`${skill}-${index}`} variant="default">
          {skill}
        </Badge>
      ))}
    </div>
  );
}
