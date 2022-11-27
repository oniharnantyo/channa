import clsx from 'clsx';
import React from 'react';
import { NavDropdown } from 'react-bootstrap';

import Style from './DropdownItem.module.scss';
import { DropdownItemProps } from './DropdownItem.types';

const DropdownItem: DropdownItemProps = React.forwardRef(({ key, name, href, active }, ref) => {
  return (
    <NavDropdown.Item
      key={key}
      className={clsx(Style.link, { [Style.active]: active })}
      href={href}
      active={active}
    >
      {name}
    </NavDropdown.Item>
  );
});

export default DropdownItem;
