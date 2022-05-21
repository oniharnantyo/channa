import HeaderStyle from '@/styles/Header.module.css';

import { Footer } from './Footer';
import { NavBar } from './Navbar';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <header className={HeaderStyle.header}>
        <NavBar></NavBar>
      </header>
      {children}
      <Footer></Footer>
    </>
  );
};
