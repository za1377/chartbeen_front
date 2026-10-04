import styled, { css } from 'styled-components';
import type { IconSize, IconColor } from './Icon.types';

const sizeStyles: Record<IconSize, ReturnType<typeof css>> = {
  xs: css`width: 12px; height: 12px;`,
  sm: css`width: 16px; height: 16px;`,
  md: css`width: 20px; height: 20px;`,
  lg: css`width: 24px; height: 24px;`,
  xl: css`width: 32px; height: 32px;`,
};

const colorStyles: Record<IconColor, ReturnType<typeof css>> = {
  primary: css`color: ${({ theme }) => theme.colors.text.primary};`,
  secondary: css`color: ${({ theme }) => theme.colors.text.secondary};`,
  tertiary: css`color: ${({ theme }) => theme.colors.text.tertiary};`,
  brand: css`color: ${({ theme }) => theme.colors.brand.secondary};`,
  success: css`color: ${({ theme }) => theme.colors.status.success};`,
  error: css`color: ${({ theme }) => theme.colors.status.error};`,
  inherit: css`color: inherit;`,
};

export const StyledIcon = styled.span<{
  $size: IconSize;
  $color: IconColor;
  $spin: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  line-height: 1;
  
  ${({ $size }) => sizeStyles[$size]}
  ${({ $color }) => colorStyles[$color]}
  
  ${({ $spin }) =>
    $spin &&
    css`
      animation: spin 1s linear infinite;
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `}
`;