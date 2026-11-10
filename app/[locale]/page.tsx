'use client';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '@/styles/themes';
import { GlobalStyles } from '@/styles/global/GlobalStyles';
import { Header } from '@/components/organisms/Header';
import { useTheme } from '@/context/ThemeContext';
import { Footer } from '@/components/organisms/Footer';
import styled from 'styled-components';

export default function HomePage() {
  const { theme: themeMode } = useTheme();

  const theme = themeMode === 'dark' ? darkTheme : lightTheme;
  const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

  const PageContent = styled.main`
  flex: 1;   
  padding: 20px;
  background: ${({ theme }) => theme.colors.background.primary};
`;

const Container = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
`;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      
      <PageWrapper>
        <Header />
        <PageContent>
          <Container>
            {/* Sections */}
          </Container>
        </PageContent>
        <Footer />
      </PageWrapper>
      
    </ThemeProvider>
  );
}