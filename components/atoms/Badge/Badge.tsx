'use client';

import { StyledBadge, StyledBadgeDot } from './Badge.styles';
import type { BadgeProps } from './Badge.types';

export function Badge({
  children,
  variant = 'primary',
  size = 'md',
  appearance = 'solid',
  bordered = false,        // ← پیش‌فرض: بدون حاشیه
  dot = false,
  icon,
  className,
}: BadgeProps) {
  return (
    <StyledBadge
      $variant={variant}
      $size={size}
      $appearance={appearance}
      $bordered={bordered}
      className={className}
    >
      {dot && <StyledBadgeDot $variant={variant} />}
      {icon}
      {children}
    </StyledBadge>
  );
}

export default Badge;