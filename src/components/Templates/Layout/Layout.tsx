import dynamic from 'next/dynamic';
import Head from 'next/head';

import Style from './Layout.module.css';
import { LayoutProps } from './Layout.types';

const Footer = dynamic(() => import('../../Organisms/Footer/Footer'));
const StyledNavbar = dynamic(() => import('../../Organisms/StyledNavbar/StyledNavbar'));

const Layout: LayoutProps = ({ children }) => {
  return (
    <>
      <Head>
        <title>Vidyāsenā Vihāra Vidyāloka</title>
        <meta
          name="description"
          content="Organisasi sosial pemuda Buddha yang bermarkas di Vihāra Vidyāloka Yogyakarta"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={Style.header}>
        <StyledNavbar />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
