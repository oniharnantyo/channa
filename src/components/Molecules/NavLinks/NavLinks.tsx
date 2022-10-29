import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';

import { NavLink } from '@components/Atoms/NavLink';

import { getRoutes } from './Navlinks.Routes';

const getPathname = (router: NextRouter) => {
  const path = router.pathname.split('/');
  return path.length ? path[1] : '';
};

const NavLinks = () => {
  const router = useRouter();

  const pathname = getPathname(router);
  const routes = getRoutes();

  return (
    <>
      {routes &&
        routes.map((route) => (
          <Link key={route.key} href={route.path} passHref>
            <NavLink key={route.key} name={route.name} active={route.key === pathname} />
          </Link>
        ))}
    </>
  );
};

export default NavLinks;
