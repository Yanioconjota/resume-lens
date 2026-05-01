import type { AnalysisResult } from '@/types/analysis';
import { mockParsedResume } from './parsedResume.mock';

export const mockAnalysisResult: AnalysisResult = {
  parsedResume: mockParsedResume,
  analysis: {
    targetRole: 'Senior Frontend Engineer',
    strengths: [
      'Strong technical skills aligned with modern frontend stack (React, TypeScript, Next.js)',
      'Demonstrated leadership experience mentoring developers and leading architecture decisions',
      'Quantified achievements with specific metrics (40% bundle reduction, 2M+ users)',
      'Progressive career growth from Junior Developer to Senior Frontend Engineer',
      'Experience with full development lifecycle including CI/CD and testing',
    ],
    issues: [
      {
        section: 'Summary',
        severity: 'medium',
        message: 'Summary is generic and could be more impactful',
        recommendation:
          'Start with a unique value proposition. Instead of listing years of experience, lead with your most impressive achievement or specialty.',
      },
      {
        section: 'Skills',
        severity: 'low',
        message: 'Skills list lacks organization and prioritization',
        recommendation:
          'Group skills by category (Frontend, Backend, Tools) and list most relevant skills first for the target role.',
      },
      {
        section: 'Experience',
        severity: 'high',
        message: 'Missing context about scale and complexity of projects',
        recommendation:
          'Add more details about team size, tech stack complexity, and business impact for each role.',
      },
      {
        section: 'Experience',
        severity: 'medium',
        message: 'Bullet points focus on tasks rather than outcomes',
        recommendation:
          'Reframe bullets using the CAR format (Challenge, Action, Result) to highlight problem-solving abilities.',
      },
      {
        section: 'Education',
        severity: 'low',
        message: 'Education section could include relevant coursework or projects',
        recommendation:
          'For senior roles, education is less critical, but adding notable projects or honors can strengthen the section.',
      },
    ],
    highImpactFixes: [
      'Rewrite summary to lead with your unique specialization in frontend architecture and design systems',
      'Add specific metrics to the TechCorp role about revenue impact or user engagement improvements',
      'Include a "Key Projects" section highlighting 2-3 flagship projects with technical details',
      'Reorganize skills into categories and add proficiency levels for key technologies',
    ],
    suggestedRewrites: [
      {
        section: 'Summary',
        original:
          'Senior Frontend Engineer with 7+ years of experience building scalable web applications.',
        improved:
          'Frontend architect specializing in design systems and performance optimization. Built component libraries adopted across 15+ products and reduced bundle sizes by 40% for platforms serving millions of users.',
        reason:
          'Leads with specialization rather than generic experience, immediately showcases impact.',
      },
      {
        section: 'Experience - TechCorp',
        original:
          'Led frontend architecture for a SaaS platform serving 2M+ monthly active users',
        improved:
          'Architected frontend platform for enterprise SaaS product (2M+ MAU, $50M ARR), establishing patterns for 8-person frontend team that reduced onboarding time by 50%',
        reason:
          'Adds business context (ARR) and team impact (onboarding time) to demonstrate senior-level thinking.',
      },
      {
        section: 'Experience - StartupXYZ',
        original: 'Improved Lighthouse performance score from 65 to 92',
        improved:
          'Drove Core Web Vitals initiative improving Lighthouse score from 65 to 92, resulting in 15% increase in organic search traffic and 8% improvement in conversion rate',
        reason:
          'Connects technical achievement to business outcomes, showing broader impact awareness.',
      },
    ],
    recommendedFormat: {
      sections: [
        'Contact Information',
        'Professional Summary',
        'Technical Skills (categorized)',
        'Professional Experience',
        'Key Projects (optional but recommended)',
        'Education',
        'Certifications (if any)',
      ],
      notes: [
        'Keep resume to 2 pages maximum for senior roles',
        'Use reverse chronological order for experience',
        'Include links to GitHub, portfolio, and LinkedIn prominently',
        'Consider adding a "Technologies" sidebar for visual scanning',
        'Use consistent date formatting throughout',
      ],
    },
  },
};
