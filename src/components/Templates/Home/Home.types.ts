import { IArticle } from '@domains/article';
import { IFreebook } from '@domains/freebook';
import { FC } from 'react';

interface IHomeProps {
  articles: IArticle[];
  freebooks: IFreebook[];
}

export type HomeProps = FC<IHomeProps>;
