import { FC } from 'react';

declare type variants = 'primary' | 'white' | string;

interface IFreebookCardProps {
  title: string;
  author: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  url: string;
  variant?: variants;
}

export type FreebookCardProps = FC<IFreebookCardProps>;
