import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FC } from 'react';

interface IProgramCardProps {
  faIcon: IconProp;
  title: string;
  description: string;
}

export type ProgramCardProps = FC<IProgramCardProps>;
