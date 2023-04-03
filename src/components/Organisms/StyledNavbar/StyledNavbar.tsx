import Link from 'next/link';

import Logo from '@assets/image/vs-logo.webp';
import LogoImage from '@components/Atoms/Image/LogoImage';
import { StyledButton } from '@components/Atoms/StyledButton';
import { NavLinks } from '@components/Molecules/NavLinks';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';

import Style from './StyledNavbar.module.scss';

const StyledNavbar = () => {
  const isShowDonateRenovationButton = new Date() < new Date('2023-05-31T23:59:59+07:00');

  return (
    <Navbar expand="lg" fixed="top" className={clsx(Style.navbar)}>
      <Container>
        <Navbar.Brand href="/">
          <Stack direction="horizontal" gap={3}>
            <LogoImage logo={Logo.src} alt="vidyasena logo" width={45} height={65} />
            <div className="d-none d-lg-block d-xl-block d-xxl-block">
              <Stack className="align-self-center">
                <span className={clsx(Style.logoText, Style.largerText)}>Vidyāsenā</span>
                <span className={clsx(Style.logoText)}>Vihāra Vidyāloka</span>
              </Stack>
            </div>
          </Stack>
        </Navbar.Brand>
        <Navbar.Toggle className={Style.toggleMenu} aria-controls="navigationBar">
          <FontAwesomeIcon icon={faBars} className={clsx('fa-xl', 'text-dark')} />
        </Navbar.Toggle>
        <Navbar.Collapse id="navigationBar">
          <Nav className="ms-auto">
            <NavLinks />
            {isShowDonateRenovationButton && (
              <div className="d-flex ms-lg-5">
                <Link href="/dana-renovasi" passHref>
                  <StyledButton variant={'primary'} size={'sm'}>
                    Dana Renovasi
                  </StyledButton>
                </Link>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default StyledNavbar;
