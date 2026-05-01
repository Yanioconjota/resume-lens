import { z } from 'zod';
import { TARGET_ROLES } from '@/lib/constants/targetRoles';

export const targetRoleSchema = z.enum(TARGET_ROLES);

export const analyzeResumeRequestSchema = z.object({
  targetRole: targetRoleSchema,
});

export const apiErrorSchema = z.object({
  code: z.string(),
  message: z.string(),
  details: z.record(z.string(), z.string()).optional(),
});

export type TargetRoleSchema = z.infer<typeof targetRoleSchema>;
