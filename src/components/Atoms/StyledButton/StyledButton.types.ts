import { FC } from 'react';

export declare type variants = 'primary' | 'white' | string;
export declare type sizes = 'sm' | 'lg' | undefined;

interface IStyledButtonProps {
  onClick?(...args: unknown[]): unknown;
  href?: string;
  value: string;
  variant: variants;
  size: sizes;
  rounded?: boolean;
}

export type StyledButtonProps = FC<IStyledButtonProps>;
