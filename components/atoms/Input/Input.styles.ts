// src/components/atoms/Input/Input.styles.ts

import styled, { css } from 'styled-components';

export type InputSize = 'sm' | 'md' | 'lg';
export type InputVariant = 'default' | 'error' | 'success';

export interface StyledInputProps {
  $size?: InputSize;
  $variant?: InputVariant;
  $fullWidth?: boolean;
  $hasIcon?: boolean;
  $iconPosition?: 'left' | 'right';
}

// ===== استایل سایزها =====
const sizeStyles = {
  sm: css`
    padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    height: 32px;
    border-radius: 4px;
  `,

  md: css`
    padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    height: 40px;
    border-radius: 6px;
  `,

  lg: css`
    padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    height: 48px;
    border-radius: 8px;
  `,
};


const variantStyles: Record<InputVariant, ReturnType<typeof css>> = {
  default: css`
    border: 1px solid ${({ theme }) => theme.colors.border.primary};
    background: ${({ theme }) => theme.colors.background.primary};
    color: ${({ theme }) => theme.colors.text.primary};

    &:focus {
      border-color: ${({ theme }) => theme.colors.brand.primary};
      outline: none;
      box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.brand.light};
    }

    &:hover:not(:disabled) {
      border-color: ${({ theme }) => theme.colors.brand.secondary};
    }
  `,

  error: css`
    border: 1px solid ${({ theme }) => theme.colors.status.error};
    background: ${({ theme }) => theme.colors.background.primary};
    color: ${({ theme }) => theme.colors.text.primary};

    &:focus {
      border-color: ${({ theme }) => theme.colors.status.error};
      outline: none;
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }

    &:hover:not(:disabled) {
      border-color: ${({ theme }) => theme.colors.status.error};
    }
  `,

  success: css`
    border: 1px solid ${({ theme }) => theme.colors.status.success};
    background: ${({ theme }) => theme.colors.background.primary};
    color: ${({ theme }) => theme.colors.text.primary};

    &:focus {
      border-color: ${({ theme }) => theme.colors.status.success};
      outline: none;
      box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
    }

    &:hover:not(:disabled) {
      border-color: ${({ theme }) => theme.colors.status.success};
    }
  `,
};

// ===== استایل‌های مربوط به آیکون =====
const iconStyles = {
  left: css`
    padding-left: 36px;
  `,
  right: css`
    padding-right: 36px;
  `,
};

// ===== استایل اصلی ورودی =====
export const StyledInput = styled.input<StyledInputProps>`
  display: block;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  font-family: inherit;
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  transition: all 0.2s ease-in-out;
  background: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: 6px;
  outline: none;
  box-sizing: border-box;

  ${({ $size = 'md' }) => sizeStyles[$size]}
  ${({ $variant = 'default' }) => variantStyles[$variant]}

  ${({ $hasIcon, $iconPosition = 'left' }) =>
    $hasIcon && iconStyles[$iconPosition]}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background: ${({ theme }) => theme.colors.background.secondary};
  }

  &:read-only {
    background: ${({ theme }) => theme.colors.background.secondary};
    cursor: default;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.tertiary};
    opacity: 1;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const InputWrapper = styled.div<{ $fullWidth?: boolean }>`
  position: relative;
  display: ${({ $fullWidth }) => ($fullWidth ? 'block' : 'inline-block')};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
`;

export const InputIcon = styled.span<{ $position?: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $position = 'left' }) =>
    $position === 'left'
      ? css`
          left: ${({ theme }) => theme.spacing[3]};
        `
      : css`
          right: ${({ theme }) => theme.spacing[3]};
        `}
  color: ${({ theme }) => theme.colors.text.tertiary};
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;