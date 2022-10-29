import { FC } from 'react';

interface INavLinkProps {
  key: string;
  href?: string;
  name?: string;
  active?: boolean;
}

export type NavLinkProps = FC<INavLinkProps>;
