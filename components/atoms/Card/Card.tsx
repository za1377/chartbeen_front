'use client';

import { StyledCard } from './Card.styles';
import type { CardProps } from './Card.types';

export function Card({
  children,
  variant = 'default',
  size = 'md',
  selected = false,
  clickable = false,
  fullWidth = false,
  fullHeight = false,
  ...rest
}: CardProps) {
  return (
    <StyledCard
      $variant={variant}
      $size={size}
      $selected={selected}
      $clickable={clickable}
      $fullWidth={fullWidth}
      $fullHeight={fullHeight}
      {...rest}
    >
      {children}
    </StyledCard>
  );
}

export default Card;