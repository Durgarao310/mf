import React from 'react';
import styled from 'styled-components';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'floating' | 'shrunk';
}

const StyledLabel = styled.label<{
  $required?: boolean;
  $disabled?: boolean;
  $error?: boolean;
  $size: 'small' | 'medium' | 'large';
  $variant: 'default' | 'floating' | 'shrunk';
}>`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: 500;
  display: block;
  margin-bottom: ${({ theme, $size }) => {
    switch ($size) {
      case 'small': return theme.spacing.xs;
      case 'large': return theme.spacing.sm;
      default: return theme.spacing.xs;
    }
  }};
  
  font-size: ${({ theme, $size }) => {
    switch ($size) {
      case 'small': return theme.typography.fontSize.xs;
      case 'large': return theme.typography.fontSize.base;
      default: return theme.typography.fontSize.sm;
    }
  }};
  
  color: ${({ theme, $disabled, $error }) => {
    if ($disabled) return theme.colors.onSurfaceVariant;
    if ($error) return theme.colors.error;
    return theme.colors.onSurface;
  }};
  
  cursor: ${({ $disabled }) => $disabled ? 'not-allowed' : 'pointer'};
  user-select: none;
  transition: ${({ theme }) => theme.transitions.base};
  
  ${({ $variant }) => $variant === 'floating' && `
    position: absolute;
    top: 16px;
    left: 16px;
    pointer-events: none;
    transition: all 0.2s ease-in-out;
    background-color: transparent;
    z-index: 1;
  `}
  
  ${({ $variant }) => $variant === 'shrunk' && `
    position: absolute;
    top: -8px;
    left: 12px;
    font-size: 0.75rem;
    background-color: inherit;
    padding: 0 4px;
    z-index: 1;
  `}
`;

const RequiredIndicator = styled.span<{ $error?: boolean }>`
  color: ${({ theme, $error }) => $error ? theme.colors.error : theme.colors.error};
  margin-left: 2px;
  font-weight: 400;
`;

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(({
  children,
  required = false,
  disabled = false,
  error = false,
  size = 'medium',
  variant = 'default',
  className,
  ...props
}, ref) => {
  return (
    <StyledLabel
      ref={ref}
      $required={required}
      $disabled={disabled}
      $error={error}
      $size={size}
      $variant={variant}
      className={className}
      {...props}
    >
      {children}
      {required && <RequiredIndicator $error={error}>*</RequiredIndicator>}
    </StyledLabel>
  );
});

Label.displayName = 'Label';

export default Label;
