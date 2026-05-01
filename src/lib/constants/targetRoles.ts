export const TARGET_ROLES = [
  'Senior Frontend Engineer',
  'React / Next.js Engineer',
  'Angular Engineer',
  'Full Stack JavaScript Engineer',
] as const;

export type TargetRole = (typeof TARGET_ROLES)[number];

export const TARGET_ROLE_DESCRIPTIONS: Record<TargetRole, string> = {
  'Senior Frontend Engineer':
    'Focus on UI architecture, component design, performance optimization, and team leadership.',
  'React / Next.js Engineer':
    'Emphasis on React ecosystem, server-side rendering, and modern web development practices.',
  'Angular Engineer':
    'Strong TypeScript skills, RxJS expertise, and enterprise application patterns.',
  'Full Stack JavaScript Engineer':
    'End-to-end development skills covering frontend, backend APIs, and database integration.',
};
