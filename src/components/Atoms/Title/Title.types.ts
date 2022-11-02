import { FC } from 'react';

interface ITitleProps {
  title: string;
  isCenterAlign?: boolean;
}

export type TitleProps = FC<ITitleProps>;
