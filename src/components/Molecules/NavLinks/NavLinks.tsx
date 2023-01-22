import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';

import { DropdownItem } from '@components/Atoms/DropdownItem';
import { NavLink } from '@components/Atoms/NavLink';
import clsx from 'clsx';
import { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';

import Style from './NavLinks.module.scss';
import { getRoutes } from './Navlinks.Routes';

const getPathname = (router: NextRouter) => {
  const path = router.pathname.split('/');
  return path.length ? path[1] : '';
};

const NavLinks = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const pathname = getPathname(router);
  const routes = getRoutes();

  const showDropdown = (e: any) => {
    setShow(!show);
  };
  const hideDropdown = (e: any) => {
    setShow(false);
  };

  return (
    <>
      {routes &&
        routes.map((route) =>
          route.isDropdown ? (
            <NavDropdown
              key={route.key}
              title={route.name}
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
              className={clsx(Style.dropdown)}
            >
              {route.dropdowns &&
                route.dropdowns.map((dropdown) => (
                  <Link key={dropdown.key} href={dropdown.path as string} passHref>
                    <DropdownItem
                      key={dropdown.key}
                      name={dropdown.name}
                      active={dropdown.key === pathname}
                    />
                  </Link>
                ))}
            </NavDropdown>
          ) : (
            <Link key={route.key} href={route.path as string} passHref>
              <NavLink
                key={route.key}
                name={route.name}
                active={route.key === pathname}
                isBlankTarget={route.isBlankTarget as boolean}
              />
            </Link>
          )
        )}
    </>
  );
};

export default NavLinks;
