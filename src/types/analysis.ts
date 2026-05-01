export type IssueSeverity = 'low' | 'medium' | 'high';

export interface Issue {
  section: string;
  severity: IssueSeverity;
  message: string;
  recommendation: string;
}

export interface SuggestedRewrite {
  section: string;
  original: string;
  improved: string;
  reason: string;
}

export interface RecommendedFormat {
  sections: string[];
  notes: string[];
}

export interface Analysis {
  targetRole: string;
  strengths: string[];
  issues: Issue[];
  highImpactFixes: string[];
  suggestedRewrites: SuggestedRewrite[];
  recommendedFormat: RecommendedFormat;
}

export interface AnalysisResult {
  parsedResume: import('./resume').ParsedResume;
  analysis: Analysis;
}
