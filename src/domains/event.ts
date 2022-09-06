import { IEntity } from './entity';

interface IEvent extends IEntity {
  title: string;
  slug: string;
  location: string;
  startAt: Date;
  imageURL?: string;
  thumbnailURL?: string;
  imageDescription: string;
  content: string;
}

export type { IEvent };
