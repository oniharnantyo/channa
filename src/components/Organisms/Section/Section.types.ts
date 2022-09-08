import { FC, ReactNode } from 'react';

export declare type variants = 'primary' | 'white' | string;

interface ISectionProps {
  children?: ReactNode;
  title: string;
  variant: variants;
}

export type SectionProps = FC<ISectionProps>;

interface IMoreableSectionProps extends ISectionProps {
  linkTitle: string;
  link: string;
}

export type MoreableSectionProps = FC<IMoreableSectionProps>;

interface ISectionNoTitleProps {
  children?: ReactNode;
  variant: variants;
}

export type SectionNoTitleProps = FC<ISectionNoTitleProps>;
