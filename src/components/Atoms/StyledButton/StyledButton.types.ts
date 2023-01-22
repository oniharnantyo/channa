import { FC, ReactNode } from 'react';
import { ButtonVariant } from 'react-bootstrap/types';
// @ts-ignore
import { Sizes } from 'react-bootstrap/types';

export declare type sizes = 'sm' | 'lg' | undefined;

interface IStyledButtonProps {
  onClick?(...args: unknown[]): unknown;
  href?: string;
  variant: ButtonVariant;
  size: Sizes;
  rounded?: boolean;
  className?: string;
  children: ReactNode;
}

export type StyledButtonProps = FC<IStyledButtonProps>;
