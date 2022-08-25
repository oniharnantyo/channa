import ColorStyle from '@styles/Color.module.css';
import { Nav } from 'react-bootstrap';

import Style from './NavLink.module.css';
import { NavLinkProps } from './NavLink.types';

const NavLink: NavLinkProps = ({ name }) => {
  return <Nav.Link className={`${Style.link} ${ColorStyle.primary}`}>{name}</Nav.Link>;
};

export default NavLink;
