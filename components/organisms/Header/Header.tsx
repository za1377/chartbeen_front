'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { NavMenu } from '@/components/molecules/NavMenu';
import { Icon } from '@/components/atoms/Icon';
import { useTheme } from '@/context/ThemeContext';
import { useLanguageToggle } from '@/hooks/useLanguageToggle';
import {
  StyledHeader,
  LogoWrapper,
  LogoText,
  LogoTitle,
  LogoSubtitle,
  DesktopNav,
  HamburgerButton,
  Backdrop,
  Drawer,
  DrawerHeader,
  DrawerCloseButton,
  DrawerBody,
} from './Header.styles';

export function Header() {
  const t = useTranslations('header');
  const locale = useLocale();
  const { theme: themeMode, toggleTheme } = useTheme();
  const toggleLanguage = useLanguageToggle();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    { key: 'home', icon: 'home', path: '/' },
    { key: 'about', icon: 'info', path: '/about' },
    { key: 'blog', icon: 'blog', path: '/blog' },
    {
      key: 'settings',
      icon: 'settings',
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
  ];

  const handleSubMenuClick = (key: string) => {
    if (key === 'light' || key === 'dark') toggleTheme();
    if (key === 'languageToggle') toggleLanguage();
  };

  const handleMobileSubMenuClick = (key: string) => {
    handleSubMenuClick(key);
    setDrawerOpen(false);
  };

  return (
    <>
      <StyledHeader>
        <LogoWrapper>
          <Link href={`/${locale}/`}>
            <img src="/image/svg/logo.svg" alt="Chartbeen" width={70} height={60} />
          </Link>
          <LogoText>
            <LogoTitle>{t('logoTitle')}</LogoTitle>
            <LogoSubtitle>{t('logoSubtitle')}</LogoSubtitle>
          </LogoText>
        </LogoWrapper>

        {/* دسکتاپ */}
        <DesktopNav>
          <NavMenu
            items={navItems}
            themeMode={themeMode}
            onSubMenuClick={handleSubMenuClick}
          />
        </DesktopNav>

        {/* موبایل: همبرگری */}
        <HamburgerButton
          onClick={() => setDrawerOpen(true)}
          aria-label="Open menu"
        >
          <Icon name="menu" size="lg" color="inherit" />
        </HamburgerButton>
      </StyledHeader>

      {/* Backdrop */}
      <Backdrop $open={drawerOpen} onClick={() => setDrawerOpen(false)} />

      {/* Drawer */}
      <Drawer $open={drawerOpen}>
        <DrawerHeader>
          <DrawerCloseButton
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
          >
            <Icon name="chevronRight" size="lg" color="inherit" />
          </DrawerCloseButton>
        </DrawerHeader>

        <DrawerBody>
          <NavMenu
            items={navItems}
            themeMode={themeMode}
            onSubMenuClick={handleMobileSubMenuClick}
          />
        </DrawerBody>
      </Drawer>
    </>
  );
}

export default Header;