'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Icon } from '@/components/atoms/Icon';
import { useTheme } from '@/context/ThemeContext';
import { useLanguageToggle } from '@/hooks/useLanguageToggle';
import {
  MenuWrapper,
  MenuButton,
  MenuIcon,
  Dropdown,
  MenuItem,
  MenuItemIcon,
  MenuDivider,
} from './SettingsMenu.styles';

export function SettingsMenu() {
  const t = useTranslations('header');
  const { theme: themeMode, toggleTheme } = useTheme();
  const locale = useLocale() as 'fa' | 'en';
  const toggleLanguage = useLanguageToggle();

  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // بستن منو با کلیک بیرون
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // بستن منو با Escape
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <MenuWrapper ref={wrapperRef}>
      <MenuButton
        $active={open}
        onClick={() => setOpen((prev) => !prev)}
        aria-label={t('settings')}
        aria-expanded={open}
      >
        <MenuIcon>
          <Icon name="settings" size="md" color="inherit" />
        </MenuIcon>
        {t('settings')}
      </MenuButton>

      <Dropdown $open={open}>
        {/* تغییر تم */}
        <MenuItem
          onClick={() => {
            toggleTheme();
            setOpen(false);
          }}
        >
          <MenuItemIcon>
            <Icon
              name={themeMode === 'dark' ? 'sun' : 'moon'}
              size="sm"
              color="inherit"
            />
          </MenuItemIcon>
          {themeMode === 'dark' ? t('light') : t('dark')}
        </MenuItem>

        <MenuDivider />

        {/* تغییر زبان */}
        <MenuItem
          onClick={() => {
            toggleLanguage();
            setOpen(false);
          }}
        >
          <MenuItemIcon>
            <Icon name="globe" size="sm" color="inherit" />
          </MenuItemIcon>
          {locale === 'fa' ? 'English' : 'فارسی'}
        </MenuItem>
      </Dropdown>
    </MenuWrapper>
  );
}

export default SettingsMenu;