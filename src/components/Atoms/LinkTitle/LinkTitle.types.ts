import { FC } from 'react';

declare type variants = 'primary' | 'white' | string;

interface ILinkTitleProps {
  url: string;
  title: string;
  isBlankTarget?: boolean;
  variant?: variants;
}

export type LinkTitleProps = FC<ILinkTitleProps>;
