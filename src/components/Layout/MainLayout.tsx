import { Footer } from './Footer';
import { NavBar } from './Navbar';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};
