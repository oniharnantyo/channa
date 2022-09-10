import { IArticle } from '@domains/article';
import { FC } from 'react';

interface IArticleProps {
  articles: IArticle[];
}

export type ArticleProps = FC<IArticleProps>;
