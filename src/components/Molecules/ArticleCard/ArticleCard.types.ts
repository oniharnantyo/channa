import { FC } from 'react';

interface IArticleCardProps {
  slug: string;
  title: string;
  author: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  createdAt: Date;
}

export type ArticleCardProps = FC<IArticleCardProps>;
