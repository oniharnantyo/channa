import { FC, ReactNode } from 'react';

interface ICenteredDivProps {
  children: ReactNode;
  minHeight?: string;
}

export type CenteredDivProps = FC<ICenteredDivProps>;
