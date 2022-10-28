import { FC } from 'react';

interface INavLinkProps {
  href?: string;
  name?: string;
  active?: boolean;
}

export type NavLinkProps = FC<INavLinkProps>;
