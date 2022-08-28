import { FC } from 'react';

export const variants = {
  primary: 'primary',
  outlinePrimary: 'outline-primary',
};

export const sizes = {
  sm: 'sm',
  lg: 'lg',
};

interface IStyledButtonProps {
  onClick?(...args: unknown[]): unknown;
  href?: string;
  value: string;
  variant: keyof typeof variants;
  size: keyof typeof sizes;
  rounded?: boolean;
}

export type StyledButtonProps = FC<IStyledButtonProps>;
