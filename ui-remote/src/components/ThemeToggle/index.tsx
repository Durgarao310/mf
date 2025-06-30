import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../theme';

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.surfaceVariant};
  border: 1px solid ${({ theme }) => theme.colors.outlineVariant};
`;

const ToggleButton = styled.button<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: ${({ theme, $active }) => 
    $active ? theme.colors.primary : 'transparent'
  };
  color: ${({ theme, $active }) => 
    $active ? theme.colors.onError : theme.colors.onSurface
  };
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.base};
  
  &:hover {
    background-color: ${({ theme, $active }) => 
      $active ? theme.colors.primaryDark : theme.colors.primary}20;
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const Label = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.onSurface};
`;

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="5"/>
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const AutoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);

const ThemeToggle: React.FC = () => {
  const { mode, setMode } = useTheme();

  return (
    <ToggleContainer>
      <Label>Theme:</Label>
      
      <ToggleButton 
        $active={mode === 'light'} 
        onClick={() => setMode('light')}
        aria-label="Light theme"
      >
        <SunIcon />
        Light
      </ToggleButton>
      
      <ToggleButton 
        $active={mode === 'dark'} 
        onClick={() => setMode('dark')}
        aria-label="Dark theme"
      >
        <MoonIcon />
        Dark
      </ToggleButton>
      
      <ToggleButton 
        $active={mode === 'auto'} 
        onClick={() => setMode('auto')}
        aria-label="Auto theme"
      >
        <AutoIcon />
        Auto
      </ToggleButton>
    </ToggleContainer>
  );
};

export default ThemeToggle;
