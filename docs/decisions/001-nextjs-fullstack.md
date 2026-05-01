# ADR 001: Next.js as Full-Stack Framework

## Status
Accepted

## Context
ResumeLens needs both frontend UI and backend API capabilities. Options considered:
1. Separate frontend (React) and backend (Express/Fastify)
2. Next.js with API routes
3. Remix

## Decision
Use Next.js 15+ with App Router as the full-stack framework.

## Rationale

### Pros
- Single deployment unit
- Shared TypeScript types between client and server
- Built-in file-based routing
- Server components for optimal performance
- Strong ecosystem and community
- Demonstrates modern full-stack Next.js skills

### Cons
- Less flexibility than separate services
- API routes have some limitations vs dedicated backend
- Vendor lock-in to Vercel ecosystem (mitigated by self-hosting option)

## Consequences
- All code lives in one repository
- API routes handle server-side logic
- Server components used where beneficial
- Deploy as single Next.js application
