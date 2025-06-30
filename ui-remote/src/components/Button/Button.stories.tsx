import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './index';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Material Design 3 Button component with comprehensive variants and features.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['filled', 'elevated', 'tonal', 'outlined', 'text'],
      description: 'Material Design 3 button variant',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Button size',
    },
    isLoading: {
      control: { type: 'boolean' },
      description: 'Show loading state',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the button',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Full width button',
    },
    children: {
      control: { type: 'text' },
      description: 'Button text content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default Story
export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'filled',
    onClick: action('button-click'),
  },
};

// All Variants Story
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button variant="filled" onClick={action('filled-click')}>
        Filled
      </Button>
      <Button variant="elevated" onClick={action('elevated-click')}>
        Elevated
      </Button>
      <Button variant="tonal" onClick={action('tonal-click')}>
        Tonal
      </Button>
      <Button variant="outlined" onClick={action('outlined-click')}>
        Outlined
      </Button>
      <Button variant="text" onClick={action('text-click')}>
        Text
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All Material Design 3 button variants in one view for visual comparison.',
      },
    },
  },
};

// All Sizes Story
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button variant="filled" size="small" onClick={action('small-click')}>
        Small
      </Button>
      <Button variant="filled" size="medium" onClick={action('medium-click')}>
        Medium
      </Button>
      <Button variant="filled" size="large" onClick={action('large-click')}>
        Large
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Button size variations (small: 32px, medium: 40px, large: 48px).',
      },
    },
  },
};

// With Icons Story
export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button 
        variant="filled" 
        leadingIcon={
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9l-5.09.74L14 16l-2.91-6.26L5 9l5.09-.74z"/>
          </svg>
        }
        onClick={action('leading-icon-click')}
      >
        Leading Icon
      </Button>
      <Button 
        variant="outlined" 
        trailingIcon={
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"/>
          </svg>
        }
        onClick={action('trailing-icon-click')}
      >
        Trailing Icon
      </Button>
      <Button 
        variant="filled" 
        leadingIcon={
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"/>
          </svg>
        }
        onClick={action('icon-only-click')}
        aria-label="Add item"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons with leading icons, trailing icons, and icon-only configurations.',
      },
    },
  },
};

// Button States Story
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button variant="filled" onClick={action('normal-click')}>
        Normal
      </Button>
      <Button variant="filled" isLoading onClick={action('loading-click')}>
        Loading
      </Button>
      <Button variant="filled" disabled onClick={action('disabled-click')}>
        Disabled
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different button states: normal, loading, and disabled.',
      },
    },
  },
};

// Full Width Story
export const FullWidth: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <Button variant="filled" fullWidth onClick={action('full-width-click')}>
        Full Width Button
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Button that takes the full width of its container.',
      },
    },
  },
};

// Form Integration Story
export const FormIntegration: Story = {
  render: () => (
    <form 
      style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}
      onSubmit={(e) => {
        e.preventDefault();
        action('form-submit')();
      }}
    >
      <input type="text" placeholder="Enter your name" style={{ padding: '8px' }} />
      <input type="email" placeholder="Enter your email" style={{ padding: '8px' }} />
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button type="reset" variant="outlined" onClick={action('form-reset')}>
          Reset
        </Button>
        <Button type="submit" variant="filled" onClick={action('form-submit')}>
          Submit
        </Button>
      </div>
    </form>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons used in form context with submit and reset functionality.',
      },
    },
  },
};

// Accessibility Story
export const Accessibility: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h3>Keyboard Navigation Test</h3>
        <p>Use Tab to navigate between buttons, Enter/Space to activate</p>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button variant="filled" onClick={action('keyboard-1')}>
            Button 1
          </Button>
          <Button variant="outlined" onClick={action('keyboard-2')}>
            Button 2
          </Button>
          <Button variant="text" onClick={action('keyboard-3')}>
            Button 3
          </Button>
        </div>
      </div>
      
      <div>
        <h3>Icon-only Button with Aria Label</h3>
        <Button 
          variant="filled" 
          leadingIcon={
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"/>
            </svg>
          }
          aria-label="Add new item to cart"
          onClick={action('accessible-add')}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Accessibility features including keyboard navigation and proper ARIA labels.',
      },
    },
  },
};

// Dark Theme Story
export const DarkTheme: Story = {
  render: () => (
    <div style={{ 
      backgroundColor: '#121212', 
      padding: '24px', 
      borderRadius: '8px',
      display: 'flex',
      gap: '16px',
      flexWrap: 'wrap'
    }}>
      <Button variant="filled" onClick={action('dark-filled')}>
        Filled
      </Button>
      <Button variant="elevated" onClick={action('dark-elevated')}>
        Elevated
      </Button>
      <Button variant="tonal" onClick={action('dark-tonal')}>
        Tonal
      </Button>
      <Button variant="outlined" onClick={action('dark-outlined')}>
        Outlined
      </Button>
      <Button variant="text" onClick={action('dark-text')}>
        Text
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Button variants displayed on a dark background to test contrast and visibility.',
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#121212' }
      ],
    },
  },
};

// Interactive Story
export const InteractiveTest: Story = {
  args: {
    children: 'Interactive Button',
    variant: 'filled',
    size: 'medium',
    isLoading: false,
    disabled: false,
    fullWidth: false,
    onClick: action('interactive-click'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive story for modifying all button props. Use the controls panel to modify properties.',
      },
    },
  },
};

// Performance Story
export const PerformanceTest: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', 
      gap: '8px',
      maxWidth: '800px'
    }}>
      {Array.from({ length: 50 }, (_, i) => (
        <Button 
          key={i}
          variant={['filled', 'elevated', 'tonal', 'outlined', 'text'][i % 5] as any}
          size={['small', 'medium', 'large'][i % 3] as any}
          onClick={action(`perf-button-${i}`)}
        >
          Btn {i + 1}
        </Button>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Performance test with 50 buttons to verify rendering efficiency.',
      },
    },
  },
};

// Debug Story - Minimal functionality
export const Debug: Story = {
  render: () => (
    <Button variant="filled">
      Debug Button
    </Button>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Minimal button for debugging purposes.',
      },
    },
  },
};

// Simple Story without actions
export const SimpleNoActions: Story = {
  args: {
    children: 'Simple Button',
    variant: 'filled',
    // No onClick handler to test if actions are causing issues
  },
};
