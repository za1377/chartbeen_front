import type { ReactNode } from 'react';

export interface SubMenuItem {
  key: string;              // کلید ترجمه (داینامیک)
  icon: string;             // نام آیکون (داینامیک)
  onClick?: () => void;
}

export interface NavItem {
  key: string;
  icon: string;
  path?: string;
  subMenu?: SubMenuItem[] | ((themeMode: string) => SubMenuItem[]);  // ← داینامیک
}

export interface NavMenuProps {
  items: NavItem[];
  themeMode?: 'light' | 'dark';  // ← پاس دادن themeMode
  onSubMenuClick?: (key: string) => void;
}