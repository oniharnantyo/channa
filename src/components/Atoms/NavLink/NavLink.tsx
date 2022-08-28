import ColorStyle from '@styles/Color.module.css';
import classNames from 'classnames';
import React from 'react';
import { Nav } from 'react-bootstrap';

import Style from './NavLink.module.css';
import { NavLinkProps } from './NavLink.types';

const NavLink: NavLinkProps = React.forwardRef(({ name, href }, ref) => {
  return (
    <Nav.Link className={classNames(Style.link, ColorStyle.primary)} ref={ref} href={href}>
      {name}
    </Nav.Link>
  );
});

export default NavLink;
