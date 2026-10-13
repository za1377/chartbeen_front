'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Icon } from '@/components/atoms/Icon';
import {
  NavMenuWrapper,
  NavMenuItem,
  NavMenuIcon,
  SubMenuWrapper,
  SubMenuContent,
  SubMenuItem,
  SubMenuDivider,
} from './NavMenu.styles';
import type { NavMenuProps, NavItem, SubMenuItem as SubMenuItemType } from './NavMenu.types';

export function NavMenu({
  items,
  themeMode = 'light',
  onSubMenuClick,
}: NavMenuProps) {
  const locale = useLocale();
  const t = useTranslations('header');
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpenSubMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <NavMenuWrapper ref={wrapperRef}>
      {items.map((item: NavItem) => {
        // اگه subMenu یه تابع باشه، با themeMode صداش بزن
        const subMenuItems =
          typeof item.subMenu === 'function'
            ? item.subMenu(themeMode)
            : item.subMenu;

        if (subMenuItems && subMenuItems.length > 0) {
          const isOpen = openSubMenu === item.key;

          return (
            <SubMenuWrapper key={item.key}>
              <NavMenuItem
                $active={isOpen}
                onClick={() =>
                  setOpenSubMenu(isOpen ? null : item.key)
                }
              >
                <NavMenuIcon>
                  <Icon name={item.icon as any} size="md" color="inherit" />
                </NavMenuIcon>
                {t(item.key)}
              </NavMenuItem>

              <SubMenuContent $open={isOpen}>
                {subMenuItems.map((sub: SubMenuItemType, index: number) => (
                  <div key={sub.key}>
                    {index > 0 && <SubMenuDivider />}
                    <SubMenuItem
                      onClick={() => {
                        onSubMenuClick?.(sub.key);
                        setOpenSubMenu(null);
                      }}
                    >
                      <Icon name={sub.icon as any} size="sm" color="inherit" />
                      {t(sub.key)}
                    </SubMenuItem>
                  </div>
                ))}
              </SubMenuContent>
            </SubMenuWrapper>
          );
        }

        return (
          <Link key={item.key} href={`/${locale}${item.path || '/'}`}>
            <NavMenuItem $active={item.path === '/'}>
              <NavMenuIcon>
                <Icon name={item.icon as any} size="md" color="inherit" />
              </NavMenuIcon>
              {t(item.key)}
            </NavMenuItem>
          </Link>
        );
      })}
    </NavMenuWrapper>
  );
}

export default NavMenu;