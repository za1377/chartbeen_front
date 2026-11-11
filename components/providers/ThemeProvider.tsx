'use client';

import { ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { useTheme as useNextTheme } from 'next-themes';
import { lightTheme, darkTheme } from '@/styles/themes';
import { GlobalStyles } from '@/styles/global/GlobalStyles';

export function AppThemeProvider({ children }: { children: ReactNode }) {
  const { theme, resolvedTheme } = useNextTheme();
  const currentTheme = resolvedTheme || theme;
  const isDark = currentTheme === 'dark';

  return (
    <StyledThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  );
}