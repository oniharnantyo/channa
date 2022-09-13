import { IArticle } from '@domains/article';
import { FC } from 'react';

interface IArticleDetailProps {
  slug: string;
}

export type ArticleDetailProps = FC<IArticleDetailProps>;
