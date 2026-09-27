import StyledComponentsRegistry from '@/lib/registery';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Chartbeen | چارت بین',
  description: 'Real-time price tracker for gold, currency, and crypto',
  keywords: ['Chartbeen', 'طلا', 'دلار', 'بیت‌کوین', 'قیمت لحظه‌ای'],
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'fa' ? 'rtl' : 'ltr'}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}