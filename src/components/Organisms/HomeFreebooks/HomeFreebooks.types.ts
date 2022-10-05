import { IFreebook } from '@domains/freebook';
import { FC } from 'react';

interface IHomeFreebooksProps {
  freebooks: IFreebook[];
}

export type HomeFreebooksProps = FC<IHomeFreebooksProps>;
