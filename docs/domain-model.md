# Domain Model

## Core Entities

### ParsedResume

Structured representation of a resume extracted by AI.

```typescript
interface ParsedResume {
  personal: PersonalInfo;
  summary: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
  languages: string[];
}

interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  links: string[];
}

interface Experience {
  company: string;
  role: string;
  start: string;
  end: string;
  bullets: string[];
}

interface Education {
  institution: string;
  degree: string;
  field: string;
  year: string;
}
```

### Analysis

Evaluation results for a resume against a target role.

```typescript
interface Analysis {
  targetRole: string;
  strengths: string[];
  issues: Issue[];
  highImpactFixes: string[];
  suggestedRewrites: SuggestedRewrite[];
  recommendedFormat: RecommendedFormat;
}

interface Issue {
  section: string;
  severity: 'low' | 'medium' | 'high';
  message: string;
  recommendation: string;
}

interface SuggestedRewrite {
  section: string;
  original: string;
  improved: string;
  reason: string;
}

interface RecommendedFormat {
  sections: string[];
  notes: string[];
}
```

### TargetRole

Supported engineering roles for analysis.

```typescript
type TargetRole =
  | 'Senior Frontend Engineer'
  | 'React / Next.js Engineer'
  | 'Angular Engineer'
  | 'Full Stack JavaScript Engineer';
```

## Relationships

- One resume produces one `ParsedResume`
- One `ParsedResume` + `TargetRole` produces one `Analysis`
- An `Analysis` contains multiple `Issue` and `SuggestedRewrite` entries
