import { FC } from 'react';

interface IFreebookCardProps {
  title: string;
  author: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  url: string;
}

export type FreebookCardProps = FC<IFreebookCardProps>;
