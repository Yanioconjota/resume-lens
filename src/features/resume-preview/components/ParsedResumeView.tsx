import type { ParsedResume } from '@/types/resume';
import { Card, CardContent } from '@/components/ui/Card';
import { ResumeSection } from './ResumeSection';
import { ExperienceItem } from './ExperienceItem';
import { SkillList } from './SkillList';

interface ParsedResumeViewProps {
  resume: ParsedResume;
}

export function ParsedResumeView({ resume }: ParsedResumeViewProps) {
  return (
    <Card>
      <CardContent className="space-y-8">
        {/* Personal Info */}
        <div className="border-b border-gray-100 pb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {resume.personal.name || 'Name not provided'}
          </h2>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
            {resume.personal.email && (
              <span>{resume.personal.email}</span>
            )}
            {resume.personal.phone && (
              <span>{resume.personal.phone}</span>
            )}
            {resume.personal.location && (
              <span>{resume.personal.location}</span>
            )}
          </div>
          {resume.personal.links.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-3">
              {resume.personal.links.map((link, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline"
                >
                  {link.replace(/^https?:\/\//, '').split('/')[0]}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Summary */}
        {resume.summary && (
          <ResumeSection title="Summary">
            <p className="text-gray-700 leading-relaxed">{resume.summary}</p>
          </ResumeSection>
        )}

        {/* Skills */}
        {resume.skills.length > 0 && (
          <ResumeSection title="Skills">
            <SkillList skills={resume.skills} />
          </ResumeSection>
        )}

        {/* Experience */}
        {resume.experience.length > 0 && (
          <ResumeSection title="Experience">
            <div className="space-y-6">
              {resume.experience.map((exp, index) => (
                <ExperienceItem key={index} experience={exp} />
              ))}
            </div>
          </ResumeSection>
        )}

        {/* Education */}
        {resume.education.length > 0 && (
          <ResumeSection title="Education">
            <div className="space-y-3">
              {resume.education.map((edu, index) => (
                <div key={index} className="border-l-2 border-gray-200 pl-4 py-1">
                  <p className="font-medium text-gray-900">
                    {edu.degree} {edu.field && `in ${edu.field}`}
                  </p>
                  <p className="text-sm text-gray-600">
                    {edu.institution}
                    {edu.year && ` • ${edu.year}`}
                  </p>
                </div>
              ))}
            </div>
          </ResumeSection>
        )}

        {/* Languages */}
        {resume.languages.length > 0 && (
          <ResumeSection title="Languages">
            <p className="text-gray-700">{resume.languages.join(', ')}</p>
          </ResumeSection>
        )}
      </CardContent>
    </Card>
  );
}
