// Theme types
export interface Theme {
  colors: {
    // Primary colors
    primary: string;
    primaryLight: string;
    primaryDark: string;
    primary50: string;
    primary100: string;
    primary200: string;
    
    // Secondary colors
    secondary: string;
    secondaryLight: string;
    secondaryDark: string;
    
    // Surface colors
    surface: string;
    surfaceVariant: string;
    background: string;
    onSurface: string;
    onSurfaceVariant: string;
    
    // Outline colors
    outline: string;
    outlineVariant: string;
    
    // Semantic colors
    error: string;
    errorContainer: string;
    onError: string;
    onErrorContainer: string;
    success: string;
    successContainer: string;
    onSuccessContainer: string;
    warning: string;
    warningContainer: string;
    onWarningContainer: string;
  };
  
  typography: {
    fontFamily: string;
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
    };
    fontWeight: {
      normal: number;
      medium: number;
      semibold: number;
    };
  };
  
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  
  borderRadius: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    full: string;
  };
  
  shadows: {
    elevation1: string;
    elevation2: string;
    elevation3: string;
  };
  
  transitions: {
    fast: string;
    base: string;
    slow: string;
  };
}

// Light theme
export const lightTheme: Theme = {
  colors: {
    primary: '#1976d2',
    primaryLight: '#42a5f5',
    primaryDark: '#1565c0',
    primary50: '#e3f2fd',
    primary100: '#bbdefb',
    primary200: '#90caf9',
    
    secondary: '#dc004e',
    secondaryLight: '#ff5983',
    secondaryDark: '#9a0036',
    
    surface: '#ffffff',
    surfaceVariant: '#f5f5f5',
    background: '#fafafa',
    onSurface: '#1c1b1f',
    onSurfaceVariant: '#49454f',
    
    outline: '#79747e',
    outlineVariant: '#cac4d0',
    
    error: '#ba1a1a',
    errorContainer: '#ffdad6',
    onError: '#ffffff',
    onErrorContainer: '#410002',
    success: '#2e7d32',
    successContainer: '#c8e6c9',
    onSuccessContainer: '#1b5e20',
    warning: '#ed6c02',
    warningContainer: '#fff3e0',
    onWarningContainer: '#e65100',
  },
  
  typography: {
    fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
    },
  },
  
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  
  borderRadius: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    full: '9999px',
  },
  
  shadows: {
    elevation1: '0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12)',
    elevation2: '0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12)',
    elevation3: '0 1px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.12)',
  },
  
  transitions: {
    fast: '150ms ease-in-out',
    base: '250ms ease-in-out',
    slow: '350ms ease-in-out',
  },
};

// Dark theme
export const darkTheme: Theme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    
    surface: '#121212',
    surfaceVariant: '#1e1e1e',
    background: '#0a0a0a',
    onSurface: '#e6e1e5',
    onSurfaceVariant: '#cac4d0',
    
    outline: '#938f99',
    outlineVariant: '#49454f',
    
    primary: '#90caf9',
    primaryLight: '#bbdefb',
    primaryDark: '#42a5f5',
    
    error: '#ffb4ab',
    errorContainer: '#93000a',
    onError: '#690005',
    onErrorContainer: '#ffdad6',
    
    success: '#a5d6a7',
    successContainer: '#1b5e20',
    onSuccessContainer: '#c8e6c9',
    
    warning: '#ffcc02',
    warningContainer: '#e65100',
    onWarningContainer: '#fff3e0',
  },
};
