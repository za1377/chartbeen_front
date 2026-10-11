import { useTheme } from '@/context/ThemeContext';
import { useLanguageToggle } from '@/hooks/useLanguageToggle';
import { useLocale, useTranslations } from 'next-intl';
import { LogoSubtitle, LogoText, LogoTitle, LogoWrapper, Nav, NavIcon, NavLink, StyledHeader } from './Header.styles';
import { Icon } from '@/components/atoms/Icon';
import Link from 'next/link';

export function Header() {
  const t = useTranslations('header');
  const locale = useLocale();
  const { theme: themeMode, toggleTheme } = useTheme();
  const toggleLanguage = useLanguageToggle();

  const navItems = [
    { key: 'home', icon: 'home' as const, path: '/' },
    { key: 'about', icon: 'info' as const, path: '/about' },
    { key: 'blog', icon: 'blog' as const, path: '/blog' },
    { key: 'settings', icon: 'settings' as const, path: '/settings' },
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

        <NavLink onClick={toggleLanguage}>
          <NavIcon>
            <Icon name="globe" size="md" color="inherit" />
          </NavIcon>
          {t('languageToggle')}
        </NavLink>

        <NavLink onClick={toggleTheme}>
          <NavIcon>
            <Icon
              name={themeMode === 'dark' ? 'sun' : 'moon'}
              size="md"
              color="inherit"
            />
          </NavIcon>
          {themeMode === 'dark' ? t('light') : t('dark')}
        </NavLink>
      </Nav>
    </StyledHeader>
  );
}

export default Header;