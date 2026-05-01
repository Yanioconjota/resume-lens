import { z } from 'zod';
import { parsedResumeSchema } from './resume.schema';

export const issueSeveritySchema = z.enum(['low', 'medium', 'high']);

export const issueSchema = z.object({
  section: z.string(),
  severity: issueSeveritySchema,
  message: z.string(),
  recommendation: z.string(),
});

export const suggestedRewriteSchema = z.object({
  section: z.string(),
  original: z.string(),
  improved: z.string(),
  reason: z.string(),
});

export const recommendedFormatSchema = z.object({
  sections: z.array(z.string()),
  notes: z.array(z.string()),
});

export const analysisSchema = z.object({
  targetRole: z.string(),
  strengths: z.array(z.string()),
  issues: z.array(issueSchema),
  highImpactFixes: z.array(z.string()),
  suggestedRewrites: z.array(suggestedRewriteSchema),
  recommendedFormat: recommendedFormatSchema,
});

export const analysisResultSchema = z.object({
  parsedResume: parsedResumeSchema,
  analysis: analysisSchema,
});

export type AnalysisSchema = z.infer<typeof analysisSchema>;
export type AnalysisResultSchema = z.infer<typeof analysisResultSchema>;
