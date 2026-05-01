# Testing Strategy

## Overview

Testing approach for ResumeLens MVP, focusing on practical coverage.

## Test Types

### Unit Tests
- Utility functions
- Zod schema validation
- Component logic (hooks)

### Component Tests
- UI components render correctly
- Props affect output
- Accessibility compliance

### Integration Tests
- API route handling
- File upload flow
- Full analysis flow

### E2E Tests (Future)
- Complete user journey
- Cross-browser testing

## Mock Data Strategy

### Purpose
- Enable UI development before backend
- Consistent test data
- Demo-friendly results

### Mock Files
- `src/test/mocks/parsedResume.mock.ts`
- `src/test/mocks/analysisResult.mock.ts`

### Mock Characteristics
- Realistic data
- Covers edge cases
- Demonstrates all features

## Test Utilities

### Fixtures
- Sample resume files
- Expected outputs
- Error scenarios

### Helpers
- Render with providers
- Mock API responses
- Wait for async

## Coverage Goals (MVP)

| Area | Target |
|------|--------|
| Schemas | 100% |
| Utilities | 90% |
| Hooks | 80% |
| Components | 70% |
| API Routes | 80% |

## Running Tests

```bash
npm test              # Run all tests
npm test:watch        # Watch mode
npm test:coverage     # Coverage report
```

## CI Integration

Tests run on:
- Pull request creation
- Push to main branch
- Pre-deploy checks
