import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import BackgroundStyle from '@/styles/Background.module.css';
import ColorStyle from '@/styles/Color.module.css';

import Style from './Navbar.module.css';

export const NavBar = () => {
  return (
    <Navbar expand="lg" fixed="top" className={`${Style.navbar} ${BackgroundStyle.white}`}>
      <Container>
        <Navbar.Brand href="/">
          <Row>
            <Col lg={3}>
              <img
                src="https://pbs.twimg.com/profile_images/248185979/logo_Vidyasena.bmp"
                alt="logo vidyasena"
                className={Style.logo}
              />
            </Col>
            <Col className="d-none d-lg-block d-xl-block d-xxl-block" md="auto">
              <Row className={`${Style.logoText} ${ColorStyle.primary}`}>Vidyāsenā </Row>
              <Row className={`${Style.logoText} ${ColorStyle.primary}`}>Vihāra Vidyāloka</Row>
            </Col>
          </Row>
        </Navbar.Brand>
        <Navbar.Toggle className={Style.toggleMenu} aria-controls="navigationBar">
          <FontAwesomeIcon icon={faBars} className={`fa-xl ${ColorStyle.secondary}`} />
        </Navbar.Toggle>
        <Navbar.Collapse id="navigationBar">
          <Nav className="ms-auto">
            <Links />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const Links = () => {
  return (
    <>
      <LinkContainer to="/">
        <Nav.Link className={`${Style.link} ${ColorStyle.primary}`}>Beranda</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/tentang-kami">
        <Nav.Link className={`${Style.link} ${ColorStyle.primary}`}>Tentang Kami</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/acara">
        <Nav.Link className={`${Style.link} ${ColorStyle.primary}`}>Acara</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/artikel">
        <Nav.Link className={`${Style.link} ${ColorStyle.primary}`}>Artikel</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/insight">
        <Nav.Link className={`${Style.link} ${ColorStyle.primary}`}>Insight</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/kontak">
        <Nav.Link className={`${Style.link} ${ColorStyle.primary}`}>Kontak</Nav.Link>
      </LinkContainer>
    </>
  );
};
