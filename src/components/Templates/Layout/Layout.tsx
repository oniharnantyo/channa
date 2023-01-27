import dynamic from 'next/dynamic';
import Head from 'next/head';

import Style from './Layout.module.css';
import { LayoutProps } from './Layout.types';

const Footer = dynamic(() => import('../../Organisms/Footer/Footer'));
const StyledNavbar = dynamic(() => import('../../Organisms/StyledNavbar/StyledNavbar'));

const Layout: LayoutProps = ({ children }) => {
  return (
    <>
      <header className={Style.header}>
        <StyledNavbar />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
