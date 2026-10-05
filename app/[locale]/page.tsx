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
          <Header>
            <div>
              <Title>
                Chartbeen
              </Title>
              <SectionDescription>{t('subtitle')}</SectionDescription>
            </div>
            <Row style={{ marginBottom: 0 }}>
              <Button
                $variant="outline"
                $size="sm"
                onClick={toggleLanguage}
                icon={<Icon name="globe" />}
              >
                {isFa ? 'English' : 'فارسی'}
              </Button>
              <Button
                $variant="outline"
                $size="sm"
                onClick={toggleTheme}
                icon={
                  <Icon
                    name={themeMode === 'dark' ? 'sun' : 'moon'}
                  />
                }
              >
                {themeMode === 'dark' ? t('themeLight') : t('themeDark')}
              </Button>
            </Row>
          </Header>

          <Section>
            <SectionTitle>{t('buttons')}</SectionTitle>
            <SectionDescription>{t('buttonsDesc')}</SectionDescription>

            <Card>
              <Row>
                <Button $variant="primary" $size="sm">
                  {t('primary')}
                </Button>
                <Button $variant="secondary" $size="sm">
                  {t('secondary')}
                </Button>
                <Button $variant="outline" $size="sm">
                  {t('outline')}
                </Button>
                <Button $variant="ghost" $size="sm">
                  {t('ghost')}
                </Button>
              </Row>

              <Row>
                <Button $variant="primary" $size="sm">
                  {t('small')}
                </Button>
                <Button $variant="primary" $size="md">
                  {t('medium')}
                </Button>
                <Button $variant="primary" $size="lg">
                  {t('large')}
                </Button>
              </Row>

              <Row>
                <Button $variant="primary" $size="sm" disabled>
                  {t('disabled')}
                </Button>
                <Button
                  $variant="outline"
                  $size="sm"
                  icon={<Icon name="rocket" size="sm" />}
                  iconPosition="right"
                >
                  {t('start')}
                </Button>
                <Button $variant="primary" $size="sm" $fullWidth>
                  {t('fullWidth')}
                </Button>
              </Row>
            </Card>
          </Section>

          <Section>
            <SectionTitle>{t('inputs')}</SectionTitle>
            <SectionDescription>{t('inputsDesc')}</SectionDescription>

            <Card>
              <Row style={{ alignItems: 'stretch' }}>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <Input
                    $inputSize="sm"
                    label={t('username')}
                    placeholder={t('usernamePlaceholder')}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    $fullWidth
                  />
                </div>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <Input
                    $inputSize="sm"
                    label={t('search')}
                    placeholder={t('searchPlaceholder')}
                    icon={<Icon name="search" size="sm" />}
                    $fullWidth
                  />
                </div>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <Input
                    $inputSize="sm"
                    label={t('password')}
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
                    label={t('email')}
                    placeholder={t('emailPlaceholder')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={email && !email.includes('@') ? t('errorMessage') : undefined}
                    success={email && email.includes('@') ? t('successMessage') : undefined}
                    $fullWidth
                  />
                </div>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <Input $inputSize="sm" placeholder={t('small')} />
                </div>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <Input $inputSize="md" placeholder={t('medium')} />
                </div>
              </Row>
            </Card>
          </Section>

          <Section>
            <SectionTitle>{t('badges') || 'Badges'}</SectionTitle>
            <SectionDescription>
              {t('badgesDesc') || 'نمایش وضعیت‌ها با رنگ‌های مختلف'}
            </SectionDescription>

            <Card>
              {/* Solid */}
              <Row>
                <Badge variant="primary">اصلی</Badge>
                <Badge variant="success">موفقیت</Badge>
                <Badge variant="error">خطا</Badge>
                <Badge variant="warning">هشدار</Badge>
                <Badge variant="info">اطلاعات</Badge>
                <Badge variant="neutral">خنثی</Badge>
              </Row>

              {/* Soft بدون حاشیه */}
              <Row>
                <Badge variant="primary" appearance="soft">اصلی</Badge>
                <Badge variant="success" appearance="soft">موفقیت</Badge>
                <Badge variant="error" appearance="soft">خطا</Badge>
                <Badge variant="warning" appearance="soft">هشدار</Badge>
                <Badge variant="info" appearance="soft">اطلاعات</Badge>
                <Badge variant="neutral" appearance="soft">خنثی</Badge>
              </Row>

              {/* Soft با حاشیه */}
              <Row>
                <Badge variant="primary" appearance="soft" bordered>اصلی</Badge>
                <Badge variant="success" appearance="soft" bordered>موفقیت</Badge>
                <Badge variant="error" appearance="soft" bordered>خطا</Badge>
                <Badge variant="warning" appearance="soft" bordered>هشدار</Badge>
                <Badge variant="info" appearance="soft" bordered>اطلاعات</Badge>
                <Badge variant="neutral" appearance="soft" bordered>خنثی</Badge>
              </Row>

              {/* Soft + Dot */}
              <Row>
                <Badge variant="success" appearance="soft" dot>فعال</Badge>
                <Badge variant="error" appearance="soft" dot>غیرفعال</Badge>
              </Row>

              {/* مثل جدول قیمت */}
              <Row>
                <Badge variant="success" appearance="soft" bordered size="sm">۱.۰۵٪ +</Badge>
                <Badge variant="error" appearance="soft" bordered size="sm">۰.۸۵٪ -</Badge>
              </Row>
            </Card>
          </Section>

          <Section>
            <SectionTitle>Cards</SectionTitle>
            <SectionDescription>نمایش کارت‌ها با حالت‌های مختلف</SectionDescription>

            <Row>
              <BaseCard>
                <strong>Default</strong>
                <span style={{ fontSize: '12px', opacity: 0.7 }}>کارت پیش‌فرض</span>
              </BaseCard>

              <BaseCard variant="outlined">
                <strong>Outlined</strong>
                <span style={{ fontSize: '12px', opacity: 0.7 }}>فقط حاشیه</span>
              </BaseCard>

              <BaseCard variant="elevated">
                <strong>Elevated</strong>
                <span style={{ fontSize: '12px', opacity: 0.7 }}>با سایه</span>
              </BaseCard>

              <BaseCard variant="ghost">
                <strong>Ghost</strong>
                <span style={{ fontSize: '12px', opacity: 0.7 }}>شفاف</span>
              </BaseCard>
            </Row>

            <Row>
              <BaseCard clickable>
                <strong>Clickable</strong>
                <span style={{ fontSize: '12px', opacity: 0.7 }}>روی من کلیک کن</span>
              </BaseCard>

              <BaseCard clickable selected>
                <strong>Selected</strong>
                <span style={{ fontSize: '12px', opacity: 0.7 }}>انتخاب‌شده</span>
              </BaseCard>
            </Row>
          </Section>

          <Footer>{t('footer')}</Footer>
        </Container>
      </PageContainer>
    </ThemeProvider>
  );
}