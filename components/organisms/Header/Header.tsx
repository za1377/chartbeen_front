'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Icon } from '@/components/atoms/Icon';
import { SettingsMenu } from '@/components/molecules/SettingsMenu';
import {
  StyledHeader,
  LogoWrapper,
  LogoText,
  LogoTitle,
  LogoSubtitle,
  Nav,
  NavLink,
  NavIcon,
} from './Header.styles';

export function Header() {
  const t = useTranslations('header');
  const locale = useLocale();

  const navItems = [
    { key: 'about', icon: 'info' as const, path: '/about' },
    { key: 'blog', icon: 'blog' as const, path: '/blog' },
    { key: 'home', icon: 'home' as const, path: '/' },

  ];

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

      <Nav>
        <SettingsMenu />

        {navItems.map((item) => (
          <Link key={item.key} href={`/${locale}${item.path}`}>
            <NavLink $active={item.path === '/'}>
              <NavIcon>
                <Icon name={item.icon} size="md" color="inherit" />
              </NavIcon>
              {t(item.key)}
            </NavLink>
          </Link>
        ))}

      </Nav>
    </StyledHeader>
  );
}

export default Header;