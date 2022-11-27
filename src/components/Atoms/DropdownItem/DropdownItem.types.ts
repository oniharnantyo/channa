import { FC } from 'react';

interface IDropdownItemProps {
  key: string;
  href?: string;
  name?: string;
  active?: boolean;
}

export type DropdownItemProps = FC<IDropdownItemProps>;
