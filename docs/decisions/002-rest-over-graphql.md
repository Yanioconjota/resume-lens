# ADR 002: REST over GraphQL

## Status
Accepted

## Context
Need to decide on API communication pattern between client and server.

## Decision
Use REST-style API routes instead of GraphQL for the MVP.

## Rationale

### Why Not GraphQL
- Single endpoint with simple request/response
- No complex querying requirements
- Adds unnecessary complexity for MVP scope
- Additional dependencies (Apollo, codegen)
- Over-engineered for current needs

### Why REST
- Simple POST endpoint for analysis
- Direct FormData upload support
- Minimal setup required
- Easy to understand and debug
- Next.js Route Handlers work naturally

## API Design

```
POST /api/analyze-resume
- Request: FormData (file + targetRole)
- Response: JSON (parsedResume + analysis)
```

## Consequences
- Single API endpoint for MVP
- Can add GraphQL later if needed
- Keeps implementation simple and focused
