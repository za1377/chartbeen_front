'use client';

import { CardWrapper, CardTitle, CardImage } from './PriceCard.styles';
import type { PriceCardProps } from './PriceCard.types';

export function PriceCard({
  title,
  iconSrc,
  active = false,
  onClick,
}: PriceCardProps) {
  return (
    <CardWrapper
      $active={active}
      onClick={onClick}
      aria-pressed={active}
    >
      <CardTitle>{title}</CardTitle>
      <CardImage src={iconSrc} alt={title} />
    </CardWrapper>
  );
}

export default PriceCard;