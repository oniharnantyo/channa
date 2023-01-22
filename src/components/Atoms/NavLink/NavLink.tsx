import clsx from 'clsx';
import React from 'react';
import { Nav } from 'react-bootstrap';

import Style from './NavLink.module.scss';
import { NavLinkProps } from './NavLink.types';

const NavLink: NavLinkProps = React.forwardRef(
  ({ key, name, href, active, isBlankTarget }, ref) => {
    const target = isBlankTarget ? '_blank' : '';

    return (
      <Nav.Link
        key={key}
        className={clsx(Style.link, { [Style.active]: active }, 'ps-lg-4')}
        href={href}
        active={active}
        target={target}
      >
        {name}
      </Nav.Link>
    );
  }
);

export default NavLink;
