# Architecture

## Tech Stack

- **Framework**: Next.js 16+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (primary), SCSS Modules (when needed)
- **Validation**: Zod
- **State**: React hooks (no external state library for MVP)

## Folder Structure

```
src/
├── app/                    # Next.js App Router pages and API routes
│   ├── api/               # API route handlers
│   ├── analyze/           # Upload page
│   └── results/           # Results page
│
├── features/              # Feature-based modules
│   ├── resume-upload/     # Upload flow components and hooks
│   ├── resume-analysis/   # Analysis display components
│   ├── resume-preview/    # Parsed resume display
│   └── target-role/       # Role selection
│
├── components/            # Shared components
│   ├── ui/               # Domain-agnostic UI primitives
│   └── layout/           # App-level layout components
│
├── server/               # Server-only code
│   ├── ai/              # AI client and prompts
│   ├── parsing/         # File text extraction
│   └── validation/      # Server-side validation
│
├── lib/                  # Shared utilities
│   ├── schemas/         # Zod schemas
│   ├── constants/       # App constants
│   └── utils/           # Helper functions
│
├── types/               # Shared TypeScript types
└── test/                # Test utilities and mocks
```

## Module Boundaries

### UI Components (`src/components/ui`)
- Domain-agnostic primitives (Button, Card, Badge, etc.)
- No knowledge of resume or analysis concepts
- Reusable across any feature

### Feature Components (`src/features/*`)
- Domain-aware components
- Can import from `ui/` and `lib/`
- Each feature has own types, hooks, and components

### Server Code (`src/server`)
- Server-only code (never imported by client)
- File parsing, AI calls, validation
- Used by API routes

### API Routes (`src/app/api`)
- Orchestrate server logic
- Validate requests
- Return structured responses

## Data Flow

1. User selects role and uploads file (client)
2. Form data sent to `/api/analyze-resume`
3. API validates inputs
4. Text extracted from file
5. AI parses resume into JSON
6. AI analyzes against target role
7. Response validated with Zod
8. Results displayed in client
