import styled, { css } from 'styled-components';
import type { BadgeVariant, BadgeSize, BadgeAppearance } from './Badge.types';

// ===== استایل سایزها =====
const sizeStyles: Record<BadgeSize, ReturnType<typeof css>> = {
  sm: css`
    padding: 2px 8px;
    font-size: 10px;
    border-radius: 4px;
  `,
  md: css`
    padding: 4px 10px;
    font-size: 12px;
    border-radius: 6px;
  `,
  lg: css`
    padding: 6px 14px;
    font-size: 14px;
    border-radius: 8px;
  `,
};

// ===== استایل Solid =====
const solidStyles: Record<BadgeVariant, ReturnType<typeof css>> = {
  primary: css`
    background: ${({ theme }) => theme.colors.brand.secondary};
    color: ${({ theme }) => theme.colors.text.white};
  `,
  success: css`
    background: ${({ theme }) => theme.colors.status.success};
    color: ${({ theme }) => theme.colors.text.white};
  `,
  error: css`
    background: ${({ theme }) => theme.colors.status.error};
    color: ${({ theme }) => theme.colors.text.white};
  `,
  warning: css`
    background: #f59e0b;
    color: ${({ theme }) => theme.colors.text.white};
  `,
  info: css`
    background: ${({ theme }) => theme.colors.brand.primary};
    color: ${({ theme }) => theme.colors.text.white};
  `,
  neutral: css`
    background: ${({ theme }) => theme.colors.background.tertiary};
    color: ${({ theme }) => theme.colors.text.secondary};
  `,
};

// ===== استایل Soft (بدون حاشیه به‌صورت پیش‌فرض) =====
const softStyles: Record<BadgeVariant, ReturnType<typeof css>> = {
  primary: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.brand.secondary};
  `,
  success: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.status.success};
  `,
  error: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.status.error};
  `,
  warning: css`
    background: transparent;
    color: #f59e0b;
  `,
  info: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.brand.primary};
  `,
  neutral: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.text.secondary};
  `,
};

// ===== حاشیه‌ی Soft (فقط وقتی bordered=true) =====
const softBorderStyles: Record<BadgeVariant, ReturnType<typeof css>> = {
  primary: css`border: 1px solid ${({ theme }) => theme.colors.brand.secondary};`,
  success: css`border: 1px solid ${({ theme }) => theme.colors.status.success};`,
  error: css`border: 1px solid ${({ theme }) => theme.colors.status.error};`,
  warning: css`border: 1px solid #f59e0b;`,
  info: css`border: 1px solid ${({ theme }) => theme.colors.brand.primary};`,
  neutral: css`border: 1px solid ${({ theme }) => theme.colors.border.primary};`,
};

// ===== انتخاب Appearance =====
const appearanceStyles: Record<
  BadgeAppearance,
  Record<BadgeVariant, ReturnType<typeof css>>
> = {
  solid: solidStyles,
  soft: softStyles,
};

// ===== نقطه‌ی رنگی =====
const dotColorStyles: Record<BadgeVariant, ReturnType<typeof css>> = {
  primary: css`background: ${({ theme }) => theme.colors.brand.secondary};`,
  success: css`background: ${({ theme }) => theme.colors.status.success};`,
  error: css`background: ${({ theme }) => theme.colors.status.error};`,
  warning: css`background: #f59e0b;`,
  info: css`background: ${({ theme }) => theme.colors.brand.primary};`,
  neutral: css`background: ${({ theme }) => theme.colors.text.tertiary};`,
};

// ===== استایل اصلی Badge =====
export const StyledBadge = styled.span<{
  $variant: BadgeVariant;
  $size: BadgeSize;
  $appearance: BadgeAppearance;
  $bordered: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  white-space: nowrap;
  user-select: none;
  line-height: 1;
  border: 1px solid transparent;  /* ← برای جلوگیری از پرش layout */

  ${({ $size }) => sizeStyles[$size]}
  ${({ $variant, $appearance }) => appearanceStyles[$appearance][$variant]}

  /* اگه soft + bordered بود، حاشیه رو اعمال کن */
  ${({ $variant, $appearance, $bordered }) =>
    $appearance === 'soft' &&
    $bordered &&
    softBorderStyles[$variant]}
`;

// ===== نقطه‌ی رنگی =====
export const StyledBadgeDot = styled.span<{
  $variant: BadgeVariant;
}>`
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;

  ${({ $variant }) => dotColorStyles[$variant]}
`;