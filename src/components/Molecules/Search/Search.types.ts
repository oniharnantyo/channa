import { FC } from 'react';

interface ISearchProps {
  placeholder?: string;
  onType: (e: any) => void;
  onFinish: () => void;
  onEnter: () => void;
}

export type SearchProps = FC<ISearchProps>;
