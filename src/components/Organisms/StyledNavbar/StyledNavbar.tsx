import Logo from '@assets/image/vs-logo.svg';
import LogoImage from '@components/Atoms/Image/LogoImage';
import { NavLinks } from '@components/Molecules/NavLinks';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BackgroundStyle from '@styles/Background.module.css';
import ColorStyle from '@styles/Color.module.css';
import clsx from 'clsx';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';

import Style from './StyledNavbar.module.css';

const StyledNavbar = () => {
  return (
    <Navbar expand="lg" fixed="top" className={clsx(Style.navbar, BackgroundStyle.white)}>
      <Container>
        <Navbar.Brand href="/">
          <Row>
            <Col lg={3}>
              <LogoImage logo={Logo} alt="vidyasena logo" className={Style.logo} />
            </Col>
            <Col className="d-none d-lg-block d-xl-block d-xxl-block" md="auto">
              <Row className={clsx(Style.logoText, ColorStyle.primary)}>Vidyāsenā </Row>
              <Row className={clsx(Style.logoText, ColorStyle.primary)}>Vihāra Vidyāloka</Row>
            </Col>
          </Row>
        </Navbar.Brand>
        <Navbar.Toggle className={Style.toggleMenu} aria-controls="navigationBar">
          <FontAwesomeIcon icon={faBars} className={clsx('fa-xl', ColorStyle.secondary)} />
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
