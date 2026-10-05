import styled, { css } from 'styled-components';
import type { CardVariant, CardSize } from './Card.types';

// ===== سایزها (Padding) =====
const sizeStyles: Record<CardSize, ReturnType<typeof css>> = {
  sm: css`padding: 10px;`,
  md: css`padding: 14px;`,
  lg: css`padding: 20px;`,
};

// ===== واریانت‌ها =====
const variantStyles: Record<CardVariant, ReturnType<typeof css>> = {
  default: css`
    background: ${({ theme }) => theme.colors.background.secondary};
    border: 1px solid ${({ theme }) => theme.colors.border.primary};
  `,
  outlined: css`
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.border.primary};
  `,
  elevated: css`
    background: ${({ theme }) => theme.colors.background.secondary};
    border: 1px solid ${({ theme }) => theme.colors.border.primary};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  `,
  ghost: css`
    background: transparent;
    border: 1px solid transparent;
  `,
};

// ===== Props Interface =====
interface StyledCardProps {
  $variant: CardVariant;
  $size: CardSize;
  $selected: boolean;
  $clickable: boolean;
  $fullWidth: boolean;
  $fullHeight: boolean;
}

// ===== استایل اصلی Card =====
export const StyledCard = styled.div<StyledCardProps>`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  height: ${({ $fullHeight }) => ($fullHeight ? '100%' : 'auto')};
  
  ${({ $size }) => sizeStyles[$size]}
  ${({ $variant }) => variantStyles[$variant]}
  
  /* حالت کلیک */
  cursor: ${({ $clickable }) => ($clickable ? 'pointer' : 'default')};
  
  ${({ $clickable }) =>
    $clickable &&
    css`
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
        border-color: ${({ theme }) => theme.colors.brand.secondary};
      }
      
      &:active {
        transform: translateY(0);
      }
    `}
  
  /* حالت انتخاب‌شده */
  ${({ $selected, theme }) =>
    $selected &&
    css`
      border-color: ${theme.colors.brand.secondary};
      box-shadow: 0 0 0 2px ${theme.colors.brand.secondary}33;
    `}
`;