import { FC } from 'react';

interface IProgramCardProps {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export type ProgramCardProps = FC<IProgramCardProps>;
