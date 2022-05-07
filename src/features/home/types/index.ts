import { BaseEntity } from '@/types';

export type LatestEvent = {
  name: string;
  startAt: Date;
} & BaseEntity;

export type Article = {
  title: string;
  author: string;
  description: string;
  slug: string;
  imageUrl: string;
  imageAlt: string;
  content: string;
} & BaseEntity;
