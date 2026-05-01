# ADR 003: LLM for Structured Resume Parsing

## Status
Accepted

## Context
Need to extract structured data from resume text. Options:
1. Rule-based parsing (regex, NLP libraries)
2. ML models trained for resume parsing
3. LLM with structured output prompts

## Decision
Use LLM (OpenAI/Anthropic) with structured output prompts.

## Rationale

### Why LLM
- Handles diverse resume formats
- Understands context and intent
- Can normalize inconsistent data
- Provides analysis in same call
- Easier to iterate on prompts than training models

### Why Not Rule-Based
- Resumes vary significantly in format
- Regex is brittle for unstructured text
- Would require extensive edge case handling

### Why Not Dedicated ML
- Requires training data
- More complex deployment
- Less flexible for iterating

## Implementation

1. Extract raw text from file
2. Send to LLM with structured output prompt
3. Parse JSON response
4. Validate with Zod schema
5. Handle parsing failures gracefully

## Consequences
- Depends on external LLM API
- Requires API key management
- Cost per analysis (acceptable for MVP)
- Need robust error handling for malformed responses
