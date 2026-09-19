'use client';

import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { StyledButton } from './Button.styles';
import type { ButtonVariant, ButtonSize } from './Button.styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  $variant?: ButtonVariant;
  $size?: ButtonSize;
  $fullWidth?: boolean;
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  $variant = 'primary',
  $size = 'md',
  $fullWidth = false,
  children,
  icon,
  iconPosition = 'left',
  disabled = false,
  ...rest
}) => {
  return (
    <StyledButton
      $variant={$variant}
      $size={$size}
      $fullWidth={$fullWidth}
      disabled={disabled}
      {...rest}
    >
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </StyledButton>
  );
};