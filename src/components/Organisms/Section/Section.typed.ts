import { FC, ReactNode } from 'react';

export declare type variants = 'primary' | 'white' | string;

interface ISectionProps {
  children?: ReactNode;
  title: string;
  variant: variants;
}

export type SectionProps = FC<ISectionProps>;
