import React from 'react';

export interface ButtonProps {
  /**
   * The content to display inside the button (optional for icon-only buttons)
   */
  children?: React.ReactNode;
  
  /**
   * Click handler for the button
   */
  onClick?: () => void;
  
  /**
   * Material Design 3 button variants
   */
  variant?: 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text';
  
  /**
   * Button size variants
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * Whether the button is in a loading state
   */
  isLoading?: boolean;
  
  /**
   * Whether the button is disabled
   */
  disabled?: boolean;
  
  /**
   * Whether the button should take full width of its container
   */
  fullWidth?: boolean;
  
  /**
   * Leading icon element
   */
  leadingIcon?: React.ReactNode;
  
  /**
   * Trailing icon element
   */
  trailingIcon?: React.ReactNode;
  
  /**
   * HTML button type
   */
  type?: 'button' | 'submit' | 'reset';
  
  /**
   * Aria label for accessibility
   */
  'aria-label'?: string;
  
  /**
   * Custom className for additional styling
   */
  className?: string;
}

export interface StyledButtonProps {
  variant: 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text';
  size: 'small' | 'medium' | 'large';
  isLoading: boolean;
  isDisabled: boolean;
  fullWidth: boolean;
  hasLeadingIcon: boolean;
  hasTrailingIcon: boolean;
  hasOnlyIcons: boolean;
}
