'use client';

import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { lightTheme, darkTheme } from '@/styles/themes';
import { GlobalStyles } from '@/styles/global/GlobalStyles';
import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';

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

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
  flex-wrap: wrap;
  gap: 12px;
`;

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
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
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
  const [isDark, setIsDark] = useState(true);
  const [language, setLanguage] = useState<'fa' | 'en'>('fa');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const theme = isDark ? darkTheme : lightTheme;
  const isFa = language === 'fa';

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isFa ? 'rtl' : 'ltr';
  }, [language, isFa]);

  const t = {
    subtitle: isFa ? 'سیستم طراحی چارت بین' : 'Chartbeen Design System',
    buttons: isFa ? 'دکمه‌ها' : 'Buttons',
    buttonsDesc: isFa
      ? 'چهار واریانت، سه سایز، حالت غیرفعال و تمام عرض'
      : '4 variants, 3 sizes, disabled, and full width',
    primary: isFa ? 'اصلی' : 'Primary',
    secondary: isFa ? 'ثانویه' : 'Secondary',
    outline: isFa ? 'خطی' : 'Outline',
    ghost: isFa ? 'شفاف' : 'Ghost',
    small: isFa ? 'کوچک' : 'Small',
    medium: isFa ? 'متوسط' : 'Medium',
    large: isFa ? 'بزرگ' : 'Large',
    disabled: isFa ? 'غیرفعال' : 'Disabled',
    fullWidth: isFa ? 'تمام عرض' : 'Full Width',
    inputs: isFa ? 'ورودی‌ها' : 'Inputs',
    inputsDesc: isFa
      ? 'با آیکون، لیبل، خطا و حالت موفقیت'
      : 'With icon, label, error, and success states',
    username: isFa ? 'نام کاربری' : 'Username',
    email: isFa ? 'ایمیل' : 'Email',
    search: isFa ? 'جستجو' : 'Search',
    password: isFa ? 'رمز عبور' : 'Password',
    usernamePlaceholder: isFa ? 'نام کاربری...' : 'Username...',
    emailPlaceholder: isFa ? 'ایمیل...' : 'Email...',
    searchPlaceholder: isFa ? 'جستجو...' : 'Search...',
    errorMessage: isFa ? 'ایمیل معتبر نیست' : 'Invalid email',
    successMessage: isFa ? 'ایمیل معتبر است' : 'Email is valid',
    footer: isFa
      ? 'طراحی و توسعه توسط زهرا انوری'
      : 'Designed & Developed by Zahra Anvari',
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <PageContainer>
        <Container>
          <Header>
            <div>
              <Title>
                Chart<span>Bin</span>
              </Title>
              <SectionDescription>{t.subtitle}</SectionDescription>
            </div>
            <Row style={{ marginBottom: 0 }}>
              <Button
                $variant="outline"
                $size="sm"
                onClick={() => setLanguage(isFa ? 'en' : 'fa')}
                icon="🌐"
              >
                {isFa ? 'English' : 'فارسی'}
              </Button>
              <Button
                $variant="outline"
                $size="sm"
                onClick={() => setIsDark(!isDark)}
                icon={isDark ? '☀️' : '🌙'}
              >
                {isDark ? (isFa ? 'روشن' : 'Light') : (isFa ? 'تاریک' : 'Dark')}
              </Button>
            </Row>
          </Header>

          <Section>
            <SectionTitle>{t.buttons}</SectionTitle>
            <SectionDescription>{t.buttonsDesc}</SectionDescription>

            <Card>
              <Row>
                <Button $variant="primary" $size="sm">{t.primary}</Button>
                <Button $variant="secondary" $size="sm">{t.secondary}</Button>
                <Button $variant="outline" $size="sm">{t.outline}</Button>
                <Button $variant="ghost" $size="sm">{t.ghost}</Button>
              </Row>

              <Row>
                <Button $variant="primary" $size="sm">{t.small}</Button>
                <Button $variant="primary" $size="md">{t.medium}</Button>
                <Button $variant="primary" $size="lg">{t.large}</Button>
              </Row>

              <Row>
                <Button $variant="primary" $size="sm" disabled>
                  {t.disabled}
                </Button>
                <Button $variant="outline" $size="sm" icon="🚀" iconPosition="right">
                  {isFa ? 'شروع' : 'Start'}
                </Button>
                <Button $variant="primary" $size="sm" $fullWidth>
                  {t.fullWidth}
                </Button>
              </Row>
            </Card>
          </Section>

          <Section>
            <SectionTitle>{t.inputs}</SectionTitle>
            <SectionDescription>{t.inputsDesc}</SectionDescription>

            <Card>
              <Row style={{ alignItems: 'stretch' }}>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <Input
                    $inputSize="sm"
                    label={t.username}
                    placeholder={t.usernamePlaceholder}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    $fullWidth
                  />
                </div>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <Input
                    $inputSize="sm"
                    label={t.search}
                    placeholder={t.searchPlaceholder}
                    icon="🔍"
                    $fullWidth
                  />
                </div>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <Input
                    $inputSize="sm"
                    label={t.password}
                    type="password"
                    placeholder="••••••"
                    $fullWidth
                  />
                </div>
              </Row>

              <Row style={{ alignItems: 'stretch' }}>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <Input
                    $inputSize="sm"
                    label={t.email}
                    placeholder={t.emailPlaceholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={email && !email.includes('@') ? t.errorMessage : undefined}
                    success={email && email.includes('@') ? t.successMessage : undefined}
                    $fullWidth
                  />
                </div>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <Input $inputSize="sm" placeholder={t.small} />
                </div>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <Input $inputSize="md" placeholder={t.medium} />
                </div>
              </Row>
            </Card>
          </Section>

          <Footer>{t.footer}</Footer>
        </Container>
      </PageContainer>
    </ThemeProvider>
  );
}