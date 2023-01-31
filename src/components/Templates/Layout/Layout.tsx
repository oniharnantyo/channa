import dynamic from 'next/dynamic';

import Style from './Layout.module.css';
import { LayoutProps } from './Layout.types';

const Footer = dynamic(() => import('../../Organisms/Footer/Footer'), {
  ssr: false,
});
const StyledNavbar = dynamic(() => import('../../Organisms/StyledNavbar/StyledNavbar'), {
  ssr: false,
});

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
