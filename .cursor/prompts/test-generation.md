# Test Generation Guidelines

## Unit Test Template

```typescript
import { describe, it, expect } from 'vitest';
import { functionToTest } from './module';

describe('functionToTest', () => {
  it('handles valid input correctly', () => {
    const input = { ... };
    const expected = { ... };
    expect(functionToTest(input)).toEqual(expected);
  });

  it('handles edge case: empty input', () => {
    expect(functionToTest([])).toEqual([]);
  });

  it('throws on invalid input', () => {
    expect(() => functionToTest(null)).toThrow();
  });
});
```

## Component Test Template

```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Component } from './Component';

describe('Component', () => {
  it('renders with default props', () => {
    render(<Component />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('handles click events', async () => {
    const onClick = vi.fn();
    render(<Component onClick={onClick} />);
    
    await userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });
});
```

## What to Test

### Utilities
- Happy path
- Edge cases (empty, null, undefined)
- Error conditions
- Boundary values

### Schemas
- Valid input passes
- Invalid input fails
- Optional fields work
- Default values applied

### Components
- Renders correctly
- Props affect output
- User interactions work
- Accessibility compliance

### Hooks
- Initial state correct
- State updates work
- Side effects triggered
- Cleanup on unmount
