'use client';

import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { lightTheme, darkTheme } from '@/styles/themes';
import { GlobalStyles } from '@/styles/global/GlobalStyles';
import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';
import { Icon } from '@/components/atoms/Icon';
import { useTheme } from '@/context/ThemeContext';
import { Badge } from '@/components/atoms/Badge';
import { Card as BaseCard } from '@/components/atoms/Card';
import { Header } from '@/components/organisms/Header';

// ===== استایل‌های صفحه نمایش =====
const PageContainer = styled.div`
  min-height: 100vh;
  padding: 20px;
  background: ${({ theme }) => theme.colors.background.primary};
  transition: background 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
`;

// const Header = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 20px;
//   padding-bottom: 12px;
//   border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
//   flex-wrap: wrap;
//   gap: 12px;
// `;

const Title = styled.h1`
  font-size: 24px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
  line-height: 1.2;
  text-align: start;

  span {
    color: ${({ theme }) => theme.colors.brand.secondary};
  }
`;

const Section = styled.section`
  margin-bottom: 16px;
`;

const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 2px;
  text-align: start;
`;

const SectionDescription = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text.tertiary};
  margin-bottom: 10px;
  text-align: start;
`;

const Row = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Card = styled.div`
  padding: 14px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.background.secondary};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  margin-bottom: 12px;
`;

const Footer = styled.footer`
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid ${({ theme }) => theme.colors.border.primary};
  text-align: center;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text.tertiary};
`;

// ===== کامپوننت اصلی =====
export default function HomePage() {
  const { theme: themeMode, toggleTheme } = useTheme();

  // ۱. ترجمه‌ها
  const t = useTranslations('home');

  // ۲. زبان فعلی از URL
  const locale = useLocale();
  const isFa = locale === 'fa';

  // ۳. برای تغییر زبان
  const router = useRouter();
  const pathname = usePathname();

  // ۴. Stateها
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const theme = themeMode === 'dark' ? darkTheme : lightTheme;

  // ۵. تابع تغییر زبان (URL رو عوض می‌کنه)
  const toggleLanguage = () => {
    const newLocale = isFa ? 'en' : 'fa';
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <PageContainer>
        <Container>
          <Header />
            

          {/* <Footer>{t('footer')}</Footer> */}
        </Container>
      </PageContainer>
    </ThemeProvider>
  );
}