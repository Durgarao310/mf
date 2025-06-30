import styled, { css, keyframes } from 'styled-components';
import { Button as AriaButton } from 'react-aria-components';
import { StyledButtonProps } from './Button.types';

// Loading animation keyframes
const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

// Ripple effect keyframes (Material Design)
const ripple = keyframes`
  to {
    transform: scale(4);
    opacity: 0;
  }
`;

// Base button styles following Material Design 3
export const StyledButton = styled(AriaButton)<StyledButtonProps>`
  /* Reset and base styles */
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  text-decoration: none;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  outline: none;
  overflow: hidden;
  
  /* Typography - M3 Label Large */
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: 1.25;
  letter-spacing: 0.1px;
  text-align: center;
  white-space: nowrap;
  
  /* Shape - M3 uses 20px radius for buttons */
  border-radius: ${({ theme }) => theme.borderRadius.full};
  
  /* Transitions */
  transition: all ${({ theme }) => theme.transitions.base};
  
  /* Size variations */
  ${({ size, theme, hasLeadingIcon, hasTrailingIcon, hasOnlyIcons }) => {
    const iconSpacing = theme.spacing.xs;
    
    switch (size) {
      case 'small':
        return css`
          min-height: 32px;
          padding: ${hasOnlyIcons ? '6px' : `6px ${theme.spacing.sm}`};
          font-size: ${theme.typography.fontSize.xs};
          
          ${hasLeadingIcon && !hasOnlyIcons && css`
            padding-left: ${theme.spacing.xs};
          `}
          
          ${hasTrailingIcon && !hasOnlyIcons && css`
            padding-right: ${theme.spacing.xs};
          `}
        `;
      case 'large':
        return css`
          min-height: 48px;
          padding: ${hasOnlyIcons ? '12px' : `12px ${theme.spacing.lg}`};
          font-size: ${theme.typography.fontSize.base};
          
          ${hasLeadingIcon && !hasOnlyIcons && css`
            padding-left: ${theme.spacing.md};
          `}
          
          ${hasTrailingIcon && !hasOnlyIcons && css`
            padding-right: ${theme.spacing.md};
          `}
        `;
      default: // medium
        return css`
          min-height: 40px;
          padding: ${hasOnlyIcons ? '8px' : `8px ${theme.spacing.md}`};
          
          ${hasLeadingIcon && !hasOnlyIcons && css`
            padding-left: ${theme.spacing.sm};
          `}
          
          ${hasTrailingIcon && !hasOnlyIcons && css`
            padding-right: ${theme.spacing.sm};
          `}
        `;
    }
  }}
  
  /* Full width */
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
  
  /* Material Design 3 Variant Styles */
  ${({ variant, theme, isDisabled, isLoading }) => {
    const disabled = isDisabled || isLoading;
    
    switch (variant) {
      case 'filled':
        return css`
          background-color: ${theme.colors.primary};
          color: ${theme.colors.surface};
          box-shadow: ${theme.shadows.elevation1};
          
          &:hover:not(:disabled) {
            background-color: ${theme.colors.primaryDark};
            box-shadow: ${theme.shadows.elevation2};
          }
          
          &:active:not(:disabled) {
            background-color: ${theme.colors.primaryDark};
            box-shadow: ${theme.shadows.elevation1};
          }
          
          &:focus-visible {
            box-shadow: ${theme.shadows.elevation1}, 0 0 0 2px ${theme.colors.primaryLight};
          }
        `;
        
      case 'elevated':
        return css`
          background-color: ${theme.colors.surface};
          color: ${theme.colors.primary};
          box-shadow: ${theme.shadows.elevation1};
          
          &:hover:not(:disabled) {
            background-color: ${theme.colors.surfaceVariant};
            box-shadow: ${theme.shadows.elevation2};
          }
          
          &:active:not(:disabled) {
            background-color: ${theme.colors.surfaceVariant};
            box-shadow: ${theme.shadows.elevation1};
          }
          
          &:focus-visible {
            box-shadow: ${theme.shadows.elevation1}, 0 0 0 2px ${theme.colors.primary50};
          }
        `;
        
      case 'tonal':
        return css`
          background-color: ${theme.colors.secondary};
          color: ${theme.colors.surface};
          
          &:hover:not(:disabled) {
            background-color: ${theme.colors.secondaryDark};
            box-shadow: ${theme.shadows.elevation1};
          }
          
          &:active:not(:disabled) {
            background-color: ${theme.colors.secondaryDark};
          }
          
          &:focus-visible {
            box-shadow: 0 0 0 2px ${theme.colors.secondaryLight};
          }
        `;
        
      case 'outlined':
        return css`
          background-color: transparent;
          color: ${theme.colors.primary};
          border: 1px solid ${theme.colors.outline};
          
          &:hover:not(:disabled) {
            background-color: ${theme.colors.primary50};
            border-color: ${theme.colors.primary};
          }
          
          &:active:not(:disabled) {
            background-color: ${theme.colors.primary100};
            border-color: ${theme.colors.primaryDark};
          }
          
          &:focus-visible {
            box-shadow: 0 0 0 2px ${theme.colors.primaryLight};
            border-color: ${theme.colors.primary};
          }
        `;
        
      case 'text':
        return css`
          background-color: transparent;
          color: ${theme.colors.primary};
          
          &:hover:not(:disabled) {
            background-color: ${theme.colors.primary50};
          }
          
          &:active:not(:disabled) {
            background-color: ${theme.colors.primary100};
          }
          
          &:focus-visible {
            box-shadow: 0 0 0 2px ${theme.colors.primaryLight};
          }
        `;
        
      default:
        return '';
    }
  }}
  
  /* Disabled state */
  ${({ isDisabled, isLoading, theme, variant }) =>
    (isDisabled || isLoading) &&
    css`
      opacity: 0.38;
      cursor: not-allowed;
      pointer-events: none;
      
      ${variant === 'outlined' &&
      css`
        border-color: ${theme.colors.outlineVariant};
        color: ${theme.colors.onSurfaceVariant};
      `}
      
      ${(variant === 'filled' || variant === 'elevated' || variant === 'tonal') &&
      css`
        background-color: ${theme.colors.onSurfaceVariant};
        color: ${theme.colors.surface};
        box-shadow: none;
      `}
      
      ${variant === 'text' &&
      css`
        color: ${theme.colors.onSurfaceVariant};
      `}
    `}
  
  /* Loading state */
  ${({ isLoading }) =>
    isLoading &&
    css`
      position: relative;
      color: transparent !important;
      
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 16px;
        height: 16px;
        border: 2px solid currentColor;
        border-top-color: transparent;
        border-radius: 50%;
        animation: ${spin} 1s linear infinite;
      }
    `}
  
  /* Responsive design */
  @media (max-width: 768px) {
    min-height: 44px; /* Increase touch target on mobile */
  }
  
  /* Material Design ripple effect */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: currentColor;
    opacity: 0;
    transform: translate(-50%, -50%);
    transition: all 0.3s;
  }
  
  &:active:not(:disabled)::before {
    width: 120%;
    height: 120%;
    opacity: 0.1;
    transition: all 0s;
  }
`;

export const ButtonContent = styled.span<{
  hasLeadingIcon: boolean;
  hasTrailingIcon: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  position: relative;
  z-index: 1;
`;

export const IconWrapper = styled.span<{ position: 'leading' | 'trailing' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  svg {
    width: 18px;
    height: 18px;
    display: block;
  }
`;
