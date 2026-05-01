# Refactoring Review Checklist

## Before Refactoring

- [ ] Understand current behavior
- [ ] Identify tests that cover the code
- [ ] Document expected outcomes
- [ ] Consider backward compatibility

## During Refactoring

### Code Quality
- [ ] Single responsibility principle
- [ ] DRY (Don't Repeat Yourself)
- [ ] Clear naming conventions
- [ ] Appropriate abstraction level

### Architecture
- [ ] Maintains module boundaries
- [ ] No new circular dependencies
- [ ] Consistent with existing patterns
- [ ] File placement correct

### TypeScript
- [ ] Types are explicit
- [ ] No loss of type safety
- [ ] Generics used appropriately
- [ ] Exports updated

## After Refactoring

- [ ] All tests pass
- [ ] No new TypeScript errors
- [ ] Build succeeds
- [ ] Functionality unchanged
- [ ] Performance not degraded

## Common Refactoring Patterns

### Extract Component
When a component grows too large:
1. Identify cohesive section
2. Define props interface
3. Move to new file
4. Import and use in parent

### Extract Hook
When component has complex logic:
1. Identify state and effects
2. Create custom hook
3. Return state and handlers
4. Use hook in component

### Extract Utility
When logic is reused:
1. Identify pure function
2. Move to lib/utils
3. Add unit tests
4. Import where needed
