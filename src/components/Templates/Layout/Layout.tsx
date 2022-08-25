import Head from 'next/head';

import { Footer } from '@components/Organisms/Footer';
import { StyledNavbar } from '@components/Organisms/StyledNavbar';

import Style from './Layout.module.css';
import { LayoutProps } from './Layout.types';

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
        <StyledNavbar></StyledNavbar>
      </header>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
