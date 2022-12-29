import Logo from '@assets/image/vs-logo.webp';
import LogoImage from '@components/Atoms/Image/LogoImage';
import { NavLinks } from '@components/Molecules/NavLinks';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { Col, Container, Nav, Navbar, Row, Stack } from 'react-bootstrap';

import Style from './StyledNavbar.module.scss';

const StyledNavbar = () => {
  return (
    <Navbar expand="lg" fixed="top" className={clsx(Style.navbar)}>
      <Container>
        <Navbar.Brand href="/">
          <Row>
            <Col md={2} className={clsx('align-self-center', Style.logoWrapper)}>
              <LogoImage logo={Logo.src} alt="vidyasena logo" width={45} height={65} />
            </Col>
            <Col className="d-none d-lg-block d-xl-block d-xxl-block" md={9}>
              <Stack className="align-self-center">
                <span className={clsx(Style.logoText, Style.largerText)}>Vidyāsenā</span>
                <span className={clsx(Style.logoText)}>Vihāra Vidyāloka</span>
              </Stack>
            </Col>
          </Row>
        </Navbar.Brand>
        <Navbar.Toggle className={Style.toggleMenu} aria-controls="navigationBar">
          <FontAwesomeIcon icon={faBars} className={clsx('fa-xl', 'text-dark')} />
        </Navbar.Toggle>
        <Navbar.Collapse id="navigationBar">
          <Nav className="ms-auto">
            <NavLinks />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default StyledNavbar;
