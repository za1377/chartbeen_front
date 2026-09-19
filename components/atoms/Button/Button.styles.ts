// src/components/atoms/Button/Button.styles.ts

import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface StyledButtonProps {
  $variant?: ButtonVariant;
  $size?: ButtonSize;
  $fullWidth?: boolean;
  disabled?: boolean;
}

// ===== استایل واریانت‌ها =====
const variantStyles = {
  primary: css`
    background: ${({ theme }) =>
      theme.mode === 'dark'
        ? theme.colors.brand.secondary
        : theme.colors.brand.primary};
    color: ${({ theme }) => theme.colors.text.white};
    border: 1px solid ${({ theme }) =>
      theme.mode === 'dark'
        ? theme.colors.brand.secondary
        : theme.colors.brand.primary};

    &:hover:not(:disabled) {
      background: ${({ theme }) =>
        theme.mode === 'dark' ? '#1E6A8E' : '#0F2A55'};
      border-color: ${({ theme }) =>
        theme.mode === 'dark' ? '#1E6A8E' : '#0F2A55'};
    }

    &:active:not(:disabled) {
      opacity: 0.5;
    }
  `,

  secondary: css`
    background: ${({ theme }) => theme.colors.brand.secondary};
    color: ${({ theme }) => theme.colors.text.white};
    border: 1px solid ${({ theme }) => theme.colors.brand.secondary};

    &:hover:not(:disabled) {
      background: #1E6A8E;
      border-color: #1E6A8E;
    }

    &:active:not(:disabled) {
      opacity: 0.8;
    }
  `,

  outline: css`
    background: transparent;
    color: ${({ theme }) =>
      theme.mode === 'dark'
        ? theme.colors.text.white
        : theme.colors.brand.primary};
    border: 1px solid ${({ theme }) =>
      theme.mode === 'dark'
        ? theme.colors.brand.secondary
        : theme.colors.brand.primary};

    &:hover:not(:disabled) {
      background: ${({ theme }) =>
        theme.mode === 'dark'
          ? 'rgba(40, 132, 178, 0.1)'
          : theme.colors.brand.light};
    }

    &:active:not(:disabled) {
      background: ${({ theme }) =>
        theme.mode === 'dark'
          ? 'rgba(40, 132, 178, 0.2)'
          : theme.colors.brand.primary};
      color: ${({ theme }) => theme.colors.text.white};
    }
  `,

  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.text.primary};
    border: 1px solid transparent;

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.background.secondary};
    }

    &:active:not(:disabled) {
      background: ${({ theme }) => theme.colors.background.tertiary};
    }
  `,
};

// ===== استایل سایزها =====
const sizeStyles = {
  sm: css`
    padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    border-radius: 4px;
    height: 32px;
  `,

  md: css`
    padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    border-radius: 6px;
    height: 40px;
  `,

  lg: css`
    padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    border-radius: 8px;
    height: 48px;
  `,
};

// ===== استایل اصلی دکمه =====
export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-family: inherit;
  transition: all 0.2s ease-in-out;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  user-select: none;
  white-space: nowrap;

  ${({ $variant = 'primary' }) => variantStyles[$variant]}
  ${({ $size = 'md' }) => sizeStyles[$size]}

  &:disabled {
    pointer-events: none;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.brand.secondary};
    outline-offset: 2px;
  }
`;