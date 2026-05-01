# Prompt Strategy

## Overview

The AI prompts are designed to produce structured, actionable output without hallucination.

## Prompt Structure

### 1. System Context
Define the AI's role and constraints:
- You are a resume analysis expert
- Output must be valid JSON only
- Do not invent or assume information
- Be specific and actionable

### 2. Input Data
Provide the raw resume text and target role:
- Raw text extracted from document
- Selected target role
- Any additional context

### 3. Output Schema
Define exact JSON structure expected:
- Include TypeScript-like schema
- Specify required vs optional fields
- Define allowed values (enums)

### 4. Examples (Few-shot)
Provide 1-2 examples of good output:
- Shows expected format
- Demonstrates quality of analysis
- Reduces ambiguity

## Two-Phase Approach

### Phase 1: Parse Resume
- Input: Raw text
- Output: ParsedResume JSON
- Focus: Accurate extraction

### Phase 2: Analyze Resume
- Input: ParsedResume + TargetRole
- Output: Analysis JSON
- Focus: Actionable feedback

## Anti-Hallucination Techniques

1. **Explicit instructions**: "Only include information present in the resume"
2. **Empty fields**: "If information is not found, use empty string"
3. **Confidence signals**: Include warnings when uncertain
4. **Validation**: Zod schemas catch invalid output

## Response Validation

Every AI response is:
1. Parsed as JSON (with safe parser)
2. Validated against Zod schema
3. Logged if validation fails
4. Returned with error if invalid
