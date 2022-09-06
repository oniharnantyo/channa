import { IEntity } from './entity';

interface IFreebook extends IEntity {
  title: string;
  slug: string;
  author: string;
  thumbnailURL?: string;
  imageURL?: string;
  imageDescription: string;
  description: string;
  url: string;
}

export type { IFreebook };
