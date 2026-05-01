# UI Guidelines

## Design Principles

1. **Clean and Professional**
   - Minimize visual clutter
   - Use whitespace effectively
   - Prioritize readability

2. **Portfolio-Worthy**
   - Demonstrate attention to detail
   - Show competence in modern frontend
   - Make it demo-friendly

3. **Accessible**
   - Semantic HTML elements
   - Proper ARIA attributes
   - Keyboard navigation support

## Styling Approach

### Tailwind CSS (Default)
Use Tailwind for:
- Layout (flexbox, grid, spacing)
- Typography (font sizes, weights)
- Colors and backgrounds
- Borders and shadows
- Responsive design

### SCSS Modules (When Needed)
Use SCSS only for:
- Complex animations
- Styles that are awkward in Tailwind
- Highly specific component styling

### Avoid
- Large global SCSS files
- Duplicating Tailwind utilities in SCSS
- Overly clever abstractions

## Component Patterns

### UI Components (src/components/ui)
- Generic, reusable primitives
- Accept className prop for customization
- Use cn() utility for class merging
- No domain-specific logic

### Feature Components (src/features/*)
- Domain-aware components
- Can use UI components
- Co-located with feature logic

## Color Usage

| Purpose | Tailwind Class |
|---------|---------------|
| Primary action | `bg-blue-600` |
| Success/Strength | `bg-green-*` |
| Warning/Medium | `bg-yellow-*` |
| Error/High | `bg-red-*` |
| Neutral | `bg-gray-*` |

## Spacing Scale

Use Tailwind's default spacing scale consistently:
- Small gaps: `gap-2`, `gap-3`
- Medium gaps: `gap-4`, `gap-6`
- Large gaps: `gap-8`, `gap-12`
- Section padding: `py-8`, `py-12`, `py-16`

## Typography

- Headings: `font-bold` or `font-semibold`
- Body: default weight
- Small text: `text-sm text-gray-500`
- Use Inter font family
