import Logo from '@assets/image/vs-logo.svg';
import LogoImage from '@components/Atoms/Image/LogoImage';
import { NavLinks } from '@components/Molecules/NavLinks';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';

import Style from './StyledNavbar.module.scss';

const StyledNavbar = () => {
  return (
    <Navbar expand="lg" fixed="top" className={clsx(Style.navbar)}>
      <Container>
        <Navbar.Brand href="/">
          <Row>
            <Col lg={3}>
              <LogoImage logo={Logo} alt="vidyasena logo" className={Style.logo} />
            </Col>
            <Col className="d-none d-lg-block d-xl-block d-xxl-block" md="auto">
              <Row className={clsx(Style.logoText)}>Vidyāsenā </Row>
              <Row className={clsx(Style.logoText)}>Vihāra Vidyāloka</Row>
            </Col>
          </Row>
        </Navbar.Brand>
        <Navbar.Toggle className={Style.toggleMenu} aria-controls="navigationBar">
          <FontAwesomeIcon icon={faBars} className={clsx('fa-xl', 'dark-100')} />
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
