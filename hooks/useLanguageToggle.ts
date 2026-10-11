'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useCallback } from 'react';

export function useLanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return useCallback(() => {
    const newLocale = locale === 'fa' ? 'en' : 'fa';
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  }, [locale, router, pathname]);
}