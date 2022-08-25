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
  value: string;
  variant: keyof typeof variants;
  size: keyof typeof sizes;
  rounded?: boolean;
}

export type StyledButtonProps = FC<IStyledButtonProps>;
