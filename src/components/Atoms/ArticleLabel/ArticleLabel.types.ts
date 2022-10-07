import { FC } from 'react';

interface IArticleLabelProps {
  author: string;
  date: Date;
}

export type ArticleLabelProps = FC<IArticleLabelProps>;
