'use client';

import { iconMap } from './iconMap';
import { StyledIcon } from './Icon.styles';
import type { IconProps } from './Icon.types';

export function Icon({
  name,
  size = 'md',
  color = 'inherit',
  spin = false,
  'aria-label': ariaLabel,
}: IconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in iconMap`);
    return null;
  }

  return (
    <StyledIcon
      $size={size}
      $color={color}
      $spin={spin}
      role="img"
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    >
      <IconComponent style={{ width: '100%', height: '100%' }} />
    </StyledIcon>
  );
}

export default Icon;