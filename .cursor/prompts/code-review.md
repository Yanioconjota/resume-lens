# Code Review Checklist

## Architecture
- [ ] Follows module boundaries (UI vs Feature vs Server)
- [ ] No circular dependencies
- [ ] Correct file placement
- [ ] Exports through index.ts

## TypeScript
- [ ] No `any` types without justification
- [ ] Props interfaces defined
- [ ] Zod schemas match types
- [ ] Proper error types

## Components
- [ ] Small and focused
- [ ] Accepts `className` prop (UI components)
- [ ] Handles loading/error states
- [ ] Accessible (semantic HTML, ARIA)

## Styling
- [ ] Uses Tailwind as primary approach
- [ ] SCSS only when justified
- [ ] Consistent spacing/colors
- [ ] Responsive design

## Server Code
- [ ] Input validation with Zod
- [ ] Error handling
- [ ] No API keys exposed
- [ ] Appropriate logging

## Testing
- [ ] Unit tests for utilities
- [ ] Mock data realistic
- [ ] Edge cases covered

## Documentation
- [ ] Complex logic explained
- [ ] Public APIs documented
- [ ] README updated if needed
