import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme } from '../src/theme/themes';
import { GlobalStyles } from '../src/theme/GlobalStyles';

export const decorators = [
  (Story) => (
    <StyledThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Story />
    </StyledThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#ffffff',
      },
      {
        name: 'dark',
        value: '#121212',
      },
    ],
  },
};
