# Material Design 3 Button Component

A comprehensive Button component following Material Design 3 specifications, built with React, TypeScript, and Styled Components.

## Features

- ✅ **Material Design 3 Compliant**: Follows M3 button specifications exactly
- ✅ **Full TypeScript Support**: Complete type safety with detailed interfaces
- ✅ **5 M3 Variants**: Filled, Elevated, Tonal, Outlined, Text
- ✅ **Icon Support**: Leading and trailing icons with proper spacing
- ✅ **Accessibility**: WCAG compliant with proper ARIA attributes
- ✅ **Responsive Design**: Mobile-optimized touch targets
- ✅ **Loading States**: Built-in loading animation
- ✅ **Theming**: Full theme system integration
- ✅ **Ripple Effects**: Material Design ripple animations

## Installation

```bash
npm install styled-components react-aria-components
```

## Usage

### Basic Examples

```tsx
import { Button } from '@ui-remote/components';

// Filled button (primary action)
<Button variant="filled" onClick={handleSubmit}>
  Submit Form
</Button>

// Outlined button (secondary action)
<Button variant="outlined" onClick={handleCancel}>
  Cancel
</Button>

// Text button (tertiary action)
<Button variant="text" onClick={handleHelp}>
  Need Help?
</Button>
```

### Material Design 3 Variants

```tsx
// Primary emphasis - most important actions
<Button variant="filled">Save Changes</Button>

// Elevated - important actions that need separation from background
<Button variant="elevated">Open Dialog</Button>

// Medium emphasis - secondary actions
<Button variant="tonal">Edit Profile</Button>

// Lower emphasis - secondary actions with boundaries
<Button variant="outlined">View Details</Button>

// Lowest emphasis - least important actions
<Button variant="text">Learn More</Button>
```

### With Icons

```tsx
import { SearchIcon, ArrowRightIcon, PlusIcon } from '@icons';

// Leading icon
<Button variant="filled" leadingIcon={<SearchIcon />}>
  Search
</Button>

// Trailing icon
<Button variant="outlined" trailingIcon={<ArrowRightIcon />}>
  Continue
</Button>

// Icon-only button
<Button 
  variant="filled" 
  leadingIcon={<PlusIcon />}
  aria-label="Add new item"
/>
```

### Sizes

```tsx
// Small button (32px height)
<Button variant="filled" size="small">Small</Button>

// Medium button (40px height) - default
<Button variant="filled" size="medium">Medium</Button>

// Large button (48px height)
<Button variant="filled" size="large">Large</Button>
```

### States

```tsx
// Loading state
<Button variant="filled" isLoading disabled>
  Saving...
</Button>

// Disabled state
<Button variant="filled" disabled>
  Submit
</Button>

// Full width
<Button variant="filled" fullWidth>
  Create Account
</Button>
```

## API Reference

### ButtonProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Button text content (optional for icon-only) |
| `onClick` | `() => void` | - | Click handler function |
| `variant` | `'filled' \| 'elevated' \| 'tonal' \| 'outlined' \| 'text'` | `'filled'` | Material Design 3 button variant |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size |
| `isLoading` | `boolean` | `false` | Shows loading spinner and disables interaction |
| `disabled` | `boolean` | `false` | Disables the button |
| `fullWidth` | `boolean` | `false` | Makes button take full width of container |
| `leadingIcon` | `React.ReactNode` | - | Icon displayed before text |
| `trailingIcon` | `React.ReactNode` | - | Icon displayed after text |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type |
| `aria-label` | `string` | - | Accessibility label (required for icon-only) |
| `className` | `string` | - | Custom CSS class |

## Material Design 3 Guidelines

### When to Use Each Variant

**Filled Button**
- Primary actions like "Save", "Submit", "Create"
- Most important action on the page
- Maximum emphasis

**Elevated Button**
- Important actions that need visual separation
- Actions on colored backgrounds
- Dialog primary actions

**Tonal Button**
- Secondary actions with medium emphasis
- Actions that are important but not primary
- Complements filled buttons

**Outlined Button**
- Secondary actions with clear boundaries
- Alternative to tonal buttons
- Actions that need definition against the background

**Text Button**
- Least emphasis actions
- Tertiary actions like "Cancel", "Learn More"
- Dense UI areas like toolbars

### Accessibility Features

- **Keyboard Navigation**: Full keyboard support with proper focus management
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Touch Targets**: Minimum 44px touch targets on mobile
- **Focus Indicators**: Clear focus indicators for keyboard users
- **Color Contrast**: WCAG AA compliant color combinations

### Theming

The Button component uses the theme system for consistent styling:

```tsx
const theme = {
  colors: {
    primary: '#1976d2',
    surface: '#ffffff',
    outline: '#79747e',
    // ... other M3 color tokens
  },
  typography: {
    fontSize: { sm: '0.875rem', base: '1rem' },
    fontWeight: { medium: 500 },
    // ... other typography tokens
  },
  // ... other theme tokens
};
```

## Examples in Context

### Form Actions
```tsx
<form onSubmit={handleSubmit}>
  {/* Form fields */}
  
  <div className="form-actions">
    <Button variant="text" onClick={handleCancel}>
      Cancel
    </Button>
    <Button variant="filled" type="submit">
      Submit
    </Button>
  </div>
</form>
```

### Card Actions
```tsx
<Card>
  <CardContent>
    {/* Card content */}
  </CardContent>
  <CardActions>
    <Button variant="text">Share</Button>
    <Button variant="tonal">Learn More</Button>
  </CardActions>
</Card>
```

### Toolbar Actions
```tsx
<Toolbar>
  <Button variant="text" leadingIcon={<MenuIcon />}>
    Menu
  </Button>
  <Button variant="filled" leadingIcon={<AddIcon />}>
    New Item
  </Button>
</Toolbar>
```

## Best Practices

1. **Use semantic button types** for forms (`submit`, `reset`)
2. **Provide aria-label** for icon-only buttons
3. **Follow M3 emphasis hierarchy** - use filled for primary actions
4. **Maintain consistent sizing** within the same interface
5. **Use loading states** for async operations
6. **Ensure sufficient contrast** in custom themes

## Related Components

- [Input](./Input/README.md) - Text input fields
- [Select](./Select/README.md) - Dropdown selection
- [Checkbox](./Checkbox/README.md) - Boolean selection
- [Radio](./Radio/README.md) - Single selection from group
