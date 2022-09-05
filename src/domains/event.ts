import { IEntity } from './entity';

interface IEvent extends IEntity {
  title: string;
  slug: string;
  location: string;
  startAt: Date;
  imageURL?: string;
  thumbnailUrl?: string;
  imageDescription: string;
  content: string;
}

export type { IEvent };
