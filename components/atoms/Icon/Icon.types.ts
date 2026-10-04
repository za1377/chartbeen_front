import type { IconName } from './iconMap';

export type { IconName };

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type IconColor =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'brand'
  | 'success'
  | 'error'
  | 'inherit';

export interface IconProps {
  name: IconName;
  size?: IconSize;
  color?: IconColor;
  spin?: boolean;
  'aria-label'?: string;
}