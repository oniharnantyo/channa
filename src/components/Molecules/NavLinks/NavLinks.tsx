import Link from 'next/link';



import { NavLink } from '@components/Atoms/NavLink';


const NavLinks = () => {
  return (
    <>
      <Link href="/">
        <NavLink name="Beranda"></NavLink>
      </Link>
      <Link href="/tentang-kami">
        <NavLink name="Tentang Kami"></NavLink>
      </Link>
      <Link href="/acara">
        <NavLink name="Acara"></NavLink>
      </Link>
      <Link href="/artikel">
        <NavLink name="Artikel"></NavLink>
      </Link>
      <Link href="/insight">
        <NavLink name="Insight"></NavLink>
      </Link>
      <Link href="/kontak">
        <NavLink name="Kontak"></NavLink>
      </Link>
    </>
  );
};

export default NavLinks;