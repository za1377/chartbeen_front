'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { NavMenu } from '@/components/molecules/NavMenu';
import { useTheme } from '@/context/ThemeContext';
import { useLanguageToggle } from '@/hooks/useLanguageToggle';
import {
  StyledHeader,
  LogoWrapper,
  LogoText,
  LogoTitle,
  LogoSubtitle,
} from './Header.styles';

export function Header() {
  const t = useTranslations('header');
  const locale = useLocale();
  const { theme: themeMode, toggleTheme } = useTheme();
  const toggleLanguage = useLanguageToggle();

  const navItems = [
    {
      key: 'settings',
      icon: 'settings',
      // ✅ زیرمنو به‌صورت تابع (داینامیک با themeMode)
      subMenu: (mode: string) => [
        {
          key: mode === 'dark' ? 'light' : 'dark',
          icon: mode === 'dark' ? 'sun' : 'moon',
        },
        {
          key: 'languageToggle',
          icon: 'globe',
        },
      ],
    },
    { key: 'about', icon: 'info', path: '/about' },
    { key: 'blog', icon: 'blog', path: '/blog' },
    { key: 'home', icon: 'home', path: '/' },
  ];

  const handleSubMenuClick = (key: string) => {
    if (key === 'light' || key === 'dark') toggleTheme();
    if (key === 'languageToggle') toggleLanguage();
  };

  return (
    <StyledHeader>
      <LogoWrapper>
        <Link href={`/${locale}/`}>
          <img src="/image/svg/logo.svg" alt="Chartbeen" width={40} height={40} />
        </Link>
        <LogoText>
          <LogoTitle>{t('logoTitle')}</LogoTitle>
          <LogoSubtitle>{t('logoSubtitle')}</LogoSubtitle>
        </LogoText>
      </LogoWrapper>

      <NavMenu
        items={navItems}
        themeMode={themeMode}
        onSubMenuClick={handleSubMenuClick}
      />
    </StyledHeader>
  );
}

export default Header;