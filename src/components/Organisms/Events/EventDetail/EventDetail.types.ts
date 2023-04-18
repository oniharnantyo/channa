import { IEvent } from '@domains/event';
import { FC } from 'react';

interface IEventDetailProps {
  event: IEvent;
}

export type EventDetailProps = FC<IEventDetailProps>;
