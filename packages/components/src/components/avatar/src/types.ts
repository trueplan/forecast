export type AvatarColors =
  | 'blue'
  | 'green'
  | 'lilac'
  | 'sky'
  | 'yellow'
  | 'red'
  | 'royal';
export type AvatarSizes = 'small' | 'medium' | 'large';

export interface AvatarProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color' | 'css'> {
  color?: AvatarColors;
  name: string;
  size?: AvatarSizes;
  src?: string;
}

export interface AvatarContentProps {
  src?: string;
  name: string;
}
