import { FC } from 'react';

interface IEventCardProps {
  slug: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  location: string;
  startAt: Date;
}

export type EventCardProps = FC<IEventCardProps>;
