import { IArticle } from '@domains/article';
import { FC } from 'react';

interface IArticleDetailProps {
  article: IArticle;
}

export type ArticleDetailProps = FC<IArticleDetailProps>;
