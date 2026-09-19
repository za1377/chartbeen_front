import StyledComponentsRegistry from '@/lib/registery';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ChartBin',
  description: 'Real-time price tracker for gold, currency, and crypto',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}