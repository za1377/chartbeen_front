import type { ReactNode } from 'react';

export type BadgeVariant = 
  | 'primary'    // پیش‌فرض (برند)
  | 'success'    // موفقیت/افزایش (سبز)
  | 'error'      // خطا/کاهش (قرمز)
  | 'warning'    // هشدار (زرد)
  | 'info'       // اطلاعاتی (آبی)
  | 'neutral';   // خاکستری

export type BadgeSize = 'sm' | 'md' | 'lg';

export type BadgeAppearance = 'solid' | 'soft';

export interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;           // نمایش نقطه‌ی رنگی
  icon?: ReactNode;        // آیکون کنار متن
  className?: string;
  appearance? : BadgeAppearance;
  bordered?: boolean;
}