import { BaseEntity } from '@/types';

export type LatestEvent = {
  name: string;
  startAt: Date;
} & BaseEntity;
