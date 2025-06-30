import React, { forwardRef } from 'react';
import styled from 'styled-components';
import Label from '../Label';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: boolean;
  errorMessage?: string;
  variant?: 'outlined' | 'filled';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  required?: boolean;
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const InputContainer = styled.div<{
  $variant: 'outlined' | 'filled';
  $error: boolean;
  $disabled: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  
  ${({ theme, $variant }) => $variant === 'outlined' && `
    border: 1px solid ${theme.colors.outlineVariant};
    border-radius: ${theme.borderRadius.sm};
    background-color: ${theme.colors.surface};
    
    &:hover:not([disabled]) {
      border-color: ${theme.colors.outline};
    }
    
    &:focus-within {
      border-color: ${theme.colors.primary};
      box-shadow: 0 0 0 2px ${theme.colors.primary}20;
    }
  `}
  
  ${({ theme, $variant }) => $variant === 'filled' && `
    border: none;
    border-bottom: 1px solid ${theme.colors.outlineVariant};
    border-radius: ${theme.borderRadius.sm} ${theme.borderRadius.sm} 0 0;
    background-color: ${theme.colors.surfaceVariant};
    
    &:hover:not([disabled]) {
      background-color: ${theme.colors.onSurface}08;
      border-bottom-color: ${theme.colors.outline};
    }
    
    &:focus-within {
      border-bottom: 2px solid ${theme.colors.primary};
      background-color: ${theme.colors.primary}08;
    }
  `}
  
  ${({ theme, $error }) => $error && `
    border-color: ${theme.colors.error} !important;
    
    &:focus-within {
      border-color: ${theme.colors.error} !important;
      box-shadow: 0 0 0 2px ${theme.colors.error}20 !important;
    }
  `}
  
  ${({ $disabled }) => $disabled && `
    opacity: 0.6;
    cursor: not-allowed;
  `}
`;

const StyledInput = styled.input<{
  $hasStartIcon: boolean;
  $hasEndIcon: boolean;
}>`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.onSurface};
  padding: ${({ theme }) => theme.spacing.md};
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.onSurfaceVariant};
    opacity: 1;
  }
  
  &:disabled {
    cursor: not-allowed;
  }
  
  ${({ theme, $hasStartIcon }) => $hasStartIcon && `
    padding-left: ${theme.spacing.sm};
  `}
  
  ${({ theme, $hasEndIcon }) => $hasEndIcon && `
    padding-right: ${theme.spacing.sm};
  `}
`;

const IconWrapper = styled.div<{ $position: 'start' | 'end' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.onSurfaceVariant};
  
  ${({ theme, $position }) => $position === 'start' && `
    padding-left: ${theme.spacing.md};
  `}
  
  ${({ theme, $position }) => $position === 'end' && `
    padding-right: ${theme.spacing.md};
  `}
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const HelperText = styled.div<{ $error: boolean }>`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme, $error }) => $error ? theme.colors.error : theme.colors.onSurfaceVariant};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  helperText,
  error = false,
  errorMessage,
  variant = 'outlined',
  startIcon,
  endIcon,
  required = false,
  className = '',
  id,
  disabled,
  ...props
}, ref) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  const hasError = error || !!errorMessage;
  const displayHelperText = hasError ? errorMessage : helperText;

  return (
    <InputWrapper className={className}>
      {label && (
        <Label htmlFor={inputId} required={required} disabled={disabled} error={hasError}>
          {label}
        </Label>
      )}
      
      <InputContainer
        $variant={variant}
        $error={hasError}
        $disabled={!!disabled}
      >
        {startIcon && (
          <IconWrapper $position="start">{startIcon}</IconWrapper>
        )}
        
        <StyledInput
          ref={ref}
          id={inputId}
          $hasStartIcon={!!startIcon}
          $hasEndIcon={!!endIcon}
          disabled={disabled}
          {...props}
        />
        
        {endIcon && (
          <IconWrapper $position="end">{endIcon}</IconWrapper>
        )}
      </InputContainer>
      
      {displayHelperText && (
        <HelperText $error={hasError}>
          {displayHelperText}
        </HelperText>
      )}
    </InputWrapper>
  );
});

Input.displayName = 'Input';

export default Input;
