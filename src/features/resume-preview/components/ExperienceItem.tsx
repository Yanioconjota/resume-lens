import type { Experience } from '@/types/resume';

interface ExperienceItemProps {
  experience: Experience;
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <div className="border-l-2 border-gray-200 pl-4 py-2">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
        <div>
          <h4 className="font-medium text-gray-900">{experience.role}</h4>
          <p className="text-sm text-gray-600">{experience.company}</p>
        </div>
        <p className="text-sm text-gray-500">
          {experience.start} — {experience.end}
        </p>
      </div>

      {experience.bullets.length > 0 && (
        <ul className="mt-3 space-y-2">
          {experience.bullets.map((bullet, index) => (
            <li
              key={index}
              className="flex gap-2 text-sm text-gray-700"
            >
              <span className="text-gray-400 mt-1.5 flex-shrink-0">•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
