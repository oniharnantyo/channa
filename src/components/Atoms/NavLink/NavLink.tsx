import clsx from 'clsx';
import React from 'react';
import { Nav } from 'react-bootstrap';

import Style from './NavLink.module.scss';
import { NavLinkProps } from './NavLink.types';

const NavLink: NavLinkProps = React.forwardRef(({ key, name, href, active }, ref) => {
  return (
    <Nav.Link
      key={key}
      className={clsx(Style.link, { [Style.active]: active })}
      href={href}
      active={active}
    >
      {name}
    </Nav.Link>
  );
});

export default NavLink;
