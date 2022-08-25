import { FC, ReactNode } from 'react';

interface ILayoutProps {
  children: ReactNode;
}

export type LayoutProps = FC<ILayoutProps>;
