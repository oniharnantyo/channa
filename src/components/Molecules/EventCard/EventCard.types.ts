import { FC } from 'react';

interface IEventCardProps {
  slug: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  location: string;
  createdAt: Date;
}

export type EventCardProps = FC<IEventCardProps>;
