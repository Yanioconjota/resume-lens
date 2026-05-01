import { z } from 'zod';

export const personalInfoSchema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  location: z.string(),
  links: z.array(z.string()),
});

export const experienceSchema = z.object({
  company: z.string(),
  role: z.string(),
  start: z.string(),
  end: z.string(),
  bullets: z.array(z.string()),
});

export const educationSchema = z.object({
  institution: z.string(),
  degree: z.string(),
  field: z.string(),
  year: z.string(),
});

export const parsedResumeSchema = z.object({
  personal: personalInfoSchema,
  summary: z.string(),
  skills: z.array(z.string()),
  experience: z.array(experienceSchema),
  education: z.array(educationSchema),
  languages: z.array(z.string()),
});

export type ParsedResumeSchema = z.infer<typeof parsedResumeSchema>;
