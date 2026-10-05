import type { ReactNode, HTMLAttributes } from 'react';

export type CardVariant = 
  | 'default'    // پیش‌فرض (پس‌زمینه ثانویه)
  | 'outlined'   // فقط حاشیه
  | 'elevated'   // با سایه
  | 'ghost';     // شفاف

export type CardSize = 'sm' | 'md' | 'lg';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: CardVariant;
  size?: CardSize;
  selected?: boolean;        // حالت انتخاب‌شده
  clickable?: boolean;       // قابل کلیک
  fullWidth?: boolean;
  fullHeight?: boolean;
}