import React from 'react';
import { ButtonProps } from './Button.types';
import { StyledButton, ButtonContent, IconWrapper } from './Button.styles';

/**
 * Material Design 3 Button Component
 * 
 * A comprehensive button component following Material Design 3 specifications
 * with support for various variants, states, and accessibility features.
 * 
 * @example
 * ```tsx
 * // Basic filled button
 * <Button variant="filled" onClick={() => console.log('Clicked')}>
 *   Click me
 * </Button>
 * 
 * // Button with leading icon
 * <Button 
 *   variant="outlined" 
 *   leadingIcon={<SearchIcon />}
 *   onClick={handleSearch}
 * >
 *   Search
 * </Button>
 * 
 * // Loading state
 * <Button variant="filled" isLoading disabled>
 *   Submitting...
 * </Button>
 * ```
 */
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'filled',
  size = 'medium',
  isLoading = false,
  disabled = false,
  fullWidth = false,
  leadingIcon,
  trailingIcon,
  type = 'button',
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isDisabled = disabled || isLoading;
  const hasLeadingIcon = Boolean(leadingIcon);
  const hasTrailingIcon = Boolean(trailingIcon);
  const hasOnlyIcons = hasLeadingIcon && !children;

  // Handle click events
  const handlePress = () => {
    if (!isDisabled && onClick) {
      onClick();
    }
  };

  return (
    <StyledButton
      variant={variant}
      size={size}
      isLoading={isLoading}
      isDisabled={isDisabled}
      fullWidth={fullWidth}
      hasLeadingIcon={hasLeadingIcon}
      hasTrailingIcon={hasTrailingIcon}
      hasOnlyIcons={hasOnlyIcons}
      onPress={handlePress}
      className={className}
      aria-label={ariaLabel || (hasOnlyIcons ? 'Button' : undefined)}
      {...props}
    >
      <ButtonContent
        hasLeadingIcon={hasLeadingIcon}
        hasTrailingIcon={hasTrailingIcon}
      >
        {leadingIcon && (
          <IconWrapper position="leading">
            {leadingIcon}
          </IconWrapper>
        )}
        
        {children && (
          <span>{children}</span>
        )}
        
        {trailingIcon && (
          <IconWrapper position="trailing">
            {trailingIcon}
          </IconWrapper>
        )}
      </ButtonContent>
    </StyledButton>
  );
};

export default Button;
