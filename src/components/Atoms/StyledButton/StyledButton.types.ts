import { FC, ReactNode } from 'react';

export declare type variants = 'primary' | 'light' | string;
export declare type sizes = 'sm' | 'lg' | undefined;

interface IStyledButtonProps {
  onClick?(...args: unknown[]): unknown;
  href?: string;
  variant: variants;
  size: sizes;
  rounded?: boolean;
  children: ReactNode;
}

export type StyledButtonProps = FC<IStyledButtonProps>;
