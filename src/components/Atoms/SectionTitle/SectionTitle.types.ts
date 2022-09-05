import { FC } from 'react';

export declare type variants = 'primary' | 'white' | string;

interface ISectionTitleProps {
  variant: variants;
  title: string;
}

export type SectionTitleProps = FC<ISectionTitleProps>;
