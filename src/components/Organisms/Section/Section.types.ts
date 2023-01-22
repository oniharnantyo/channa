import { CSSProperties, FC, ReactNode } from 'react';

export declare type variants = 'primary' | 'white' | string;

interface ISectionProps {
  children?: ReactNode;
  title: string;
  variant?: variants;
  minHeight?: string;
}

export type SectionProps = FC<ISectionProps>;

interface IMoreableSectionProps extends ISectionProps {
  linkTitle: string;
  link: string;
  minHeight?: string;
}

export type MoreableSectionProps = FC<IMoreableSectionProps>;

interface ISectionNoTitleProps {
  children?: ReactNode;
  variant?: variants;
  minHeight?: string;
}

export type SectionNoTitleProps = FC<ISectionNoTitleProps>;
