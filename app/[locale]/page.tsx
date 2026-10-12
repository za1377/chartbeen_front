'use client';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '@/styles/themes';
import { GlobalStyles } from '@/styles/global/GlobalStyles';
import { Header } from '@/components/organisms/Header';
import { useTheme } from '@/context/ThemeContext';

// ===== کامپوننت اصلی =====
export default function HomePage() {
  const { theme: themeMode } = useTheme();

  const theme = themeMode === 'dark' ? darkTheme : lightTheme;


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
}