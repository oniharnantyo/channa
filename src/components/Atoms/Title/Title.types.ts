import { FC } from 'react';

interface ITitleProps {
  title: string;
  isCenterAlign?: boolean;
  className?: string;
}

export type TitleProps = FC<ITitleProps>;
