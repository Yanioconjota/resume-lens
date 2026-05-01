# ResumeLens

AI-powered resume analysis tailored to engineering roles.

## Overview

ResumeLens helps engineers improve their resumes by providing structured feedback, actionable suggestions, and concrete rewrites based on their target role.

## Features

- **Target Role Selection**: Choose from Senior Frontend, React/Next.js, Angular, or Full Stack Engineer
- **Resume Upload**: Support for PDF, DOCX, and TXT formats
- **AI Analysis**: Get strengths, issues, and high-impact fixes
- **Suggested Rewrites**: Before/after comparisons with explanations
- **Format Recommendations**: Optimal resume structure for your target role

## Tech Stack

- **Framework**: Next.js 16+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Validation**: Zod
- **AI**: OpenAI / Anthropic (configurable)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/resume-lens.git
cd resume-lens

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Environment Variables

Create a `.env.local` file:

```
# AI Provider (choose one)
OPENAI_API_KEY=your_openai_key
# or
ANTHROPIC_API_KEY=your_anthropic_key
```

## Project Structure

```
src/
├── app/                 # Next.js pages and API routes
├── features/           # Feature modules
│   ├── resume-upload/  # Upload flow
│   ├── resume-analysis/# Analysis display
│   ├── resume-preview/ # Parsed resume view
│   └── target-role/    # Role selection
├── components/         # Shared components
│   ├── ui/            # UI primitives
│   └── layout/        # Layout components
├── server/            # Server-only code
├── lib/               # Utilities and schemas
└── types/             # TypeScript types
```

## Development

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## Documentation

See the [docs](./docs) folder for detailed documentation:

- [Product Brief](./docs/product-brief.md)
- [Architecture](./docs/architecture.md)
- [AI Behavior](./docs/ai-behavior.md)
- [UI Guidelines](./docs/ui-guidelines.md)

## License

MIT
