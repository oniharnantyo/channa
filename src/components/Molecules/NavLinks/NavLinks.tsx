import Link from 'next/link';

import { NavLink } from '@components/Atoms/NavLink';

const NavLinks = () => {
  return (
    <>
      <Link href="/" passHref>
        <NavLink name="Beranda"></NavLink>
      </Link>
      <Link href="/tentang-kami" passHref>
        <NavLink name="Tentang Kami"></NavLink>
      </Link>
      <Link href="/acara" passHref>
        <NavLink name="Acara"></NavLink>
      </Link>
      <Link href="/artikel" passHref>
        <NavLink name="Artikel"></NavLink>
      </Link>
      <Link href="/freebook" passHref>
        <NavLink name="Freebook"></NavLink>
      </Link>
      <Link href="/dana" passHref>
        <NavLink name="Dana"></NavLink>
      </Link>
      <Link href="/kontak" passHref>
        <NavLink name="Kontak"></NavLink>
      </Link>
    </>
  );
};

export default NavLinks;
