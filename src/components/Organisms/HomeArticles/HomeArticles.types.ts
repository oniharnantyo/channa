import { IArticle } from '@domains/article';
import { FC } from 'react';

interface IHomeArticlesProps {
  articles: IArticle[];
}

export type HomeArticlesProps = FC<IHomeArticlesProps>;
