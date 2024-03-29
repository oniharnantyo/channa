import { IEntity } from './entity';

interface IArticle extends IEntity {
  title: string;
  slug: string;
  author: string;
  thumbnailURL?: string;
  imageURL?: string;
  imageDescription: string;
  description: string;
  content: string;
}

export type { IArticle };
