import { FC } from 'react';

interface INavLinkProps {
  href?: string;
  name?: string;
}

export type NavLinkProps = FC<INavLinkProps>;
