import type { ParsedResume } from '@/types/resume';

export const mockParsedResume: ParsedResume = {
  personal: {
    name: 'Alex Johnson',
    email: 'alex.johnson@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    links: [
      'https://github.com/alexjohnson',
      'https://linkedin.com/in/alexjohnson',
      'https://alexjohnson.dev',
    ],
  },
  summary:
    'Senior Frontend Engineer with 7+ years of experience building scalable web applications. Specialized in React, TypeScript, and modern frontend architecture. Led teams of 5-8 engineers and delivered products used by millions of users.',
  skills: [
    'React',
    'TypeScript',
    'Next.js',
    'Node.js',
    'GraphQL',
    'Redux',
    'Tailwind CSS',
    'Jest',
    'Cypress',
    'AWS',
    'Docker',
    'CI/CD',
  ],
  experience: [
    {
      company: 'TechCorp Inc.',
      role: 'Senior Frontend Engineer',
      start: 'Jan 2021',
      end: 'Present',
      bullets: [
        'Led frontend architecture for a SaaS platform serving 2M+ monthly active users',
        'Reduced bundle size by 40% through code splitting and lazy loading strategies',
        'Mentored 4 junior developers and conducted code reviews for the frontend team',
        'Implemented design system used across 15+ products, improving development velocity by 30%',
      ],
    },
    {
      company: 'StartupXYZ',
      role: 'Frontend Engineer',
      start: 'Mar 2018',
      end: 'Dec 2020',
      bullets: [
        'Built React components library from scratch, adopted by 3 product teams',
        'Integrated GraphQL API layer, reducing data fetching code by 50%',
        'Improved Lighthouse performance score from 65 to 92',
        'Collaborated with design team to implement responsive layouts and animations',
      ],
    },
    {
      company: 'WebAgency',
      role: 'Junior Developer',
      start: 'Jun 2016',
      end: 'Feb 2018',
      bullets: [
        'Developed responsive websites for 20+ clients using HTML, CSS, and JavaScript',
        'Migrated legacy jQuery codebase to React for key client project',
        'Participated in agile ceremonies and contributed to sprint planning',
      ],
    },
  ],
  education: [
    {
      institution: 'University of California, Berkeley',
      degree: 'B.S.',
      field: 'Computer Science',
      year: '2016',
    },
  ],
  languages: ['English (Native)', 'Spanish (Conversational)'],
};
