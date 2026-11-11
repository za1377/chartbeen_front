import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import StyledComponentsRegistry from '@/lib/registry';
import { ThemeProvider } from 'next-themes';
import { AppThemeProvider } from '@/components/providers/ThemeProvider';

export const metadata: Metadata = {
  title: 'Chartbeen | چارت بین',
  description: 'Real-time price tracker for gold, currency, and crypto',
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'fa' ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <body style={{ margin: 0 }} suppressHydrationWarning>
        <StyledComponentsRegistry>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            scriptProps={{ type: 'application/json' }}
          >
            <NextIntlClientProvider messages={messages}>
              <AppThemeProvider>
                {children}
              </AppThemeProvider>
            </NextIntlClientProvider>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}