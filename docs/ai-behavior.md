# AI Behavior

## Core Principles

1. **Structured Output Only**
   - AI must return valid JSON
   - No markdown, explanations, or prose outside JSON
   - Response must match defined schema

2. **No Hallucination**
   - Extract only what exists in the resume
   - Do not invent experience, skills, or metrics
   - If information is missing, leave field empty

3. **Actionable Feedback**
   - Issues must include recommendations
   - Rewrites must explain the improvement
   - Suggestions must be concrete, not vague

## Output Format

```json
{
  "parsedResume": {
    "personal": { ... },
    "summary": "...",
    "skills": [...],
    "experience": [...],
    "education": [...],
    "languages": [...]
  },
  "analysis": {
    "targetRole": "...",
    "strengths": [...],
    "issues": [...],
    "highImpactFixes": [...],
    "suggestedRewrites": [...],
    "recommendedFormat": { ... }
  }
}
```

## Constraints

- Severity levels: `low`, `medium`, `high`
- Issue sections reference resume sections
- Rewrites include original text for comparison
- All arrays can be empty but must be present

## Error Handling

- If resume is unparseable, return minimal structure with warning
- If section is ambiguous, note uncertainty in issue
- Never fail silently—surface problems in issues array
