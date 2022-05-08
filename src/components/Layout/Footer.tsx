import { Col, Container, Row } from 'react-bootstrap';

import FBLogo from '@/assets/fb-logo.svg';
import IGLogo from '@/assets/ig-logo.svg';
import VSLogo from '@/assets/vs-logo.svg';

export const Footer = () => {
  return (
    <Container className="footer">
      <Row>
        <Col md={4} lg={4}>
          <img src={VSLogo} alt="logo vidyasena" className="footer-logo"></img>
          <p className="footer-quote color-grey">
            &quot;Biarlah mengorbankan harta demi menyelamatkan anggota tubuh, Biarlah mengorbankan
            anggota tubuh demi menyelamatkan hidupnya, Biarlah mengorbankan harta, anggota tubuh dan
            segalanya, meskipun pula hidupnya, demi kebenaran Dhamma.&quot;
          </p>
        </Col>
        <Col md={4} lg={4}>
          <p className="footer-title color-primary">Vidyāsenā Vihāra Vidyāloka</p>
          <p className="footer-content color-grey">
            Jalan Kenari, Gang Tanjung 1 No.231, Muja Muju, Kec. Umbulharjo, Kota Yogyakarta, Daerah
            Istimewa Yogyakarta 55165
          </p>
          <p className="footer-title color-primary">Puja Bhakti</p>
          <p className="footer-content color-grey">Setiap Hari Minggu, Pukul 09.00 WIB</p>
          <p className="footer-title color-primary">Uposatha</p>
          <p className="footer-content color-grey">
            Setiap tanggal 1 dan 15 Kalender Lunar Pukul 19.00 WIB
          </p>
          <p className="footer-title color-primary">Perpustakaan Vidyāsenā</p>
          <p className="footer-content color-grey">
            Setiap Sabtu Pukul 13.00 - 15.00 WIB
            <br />
            Setiap Minggu Pukul 11.00 - 13.00 WIB
          </p>
        </Col>
        <Col md={4} lg={4}>
          <p className="footer-title color-primary">Sosial Media Vidyāloka</p>
          <p className="footer-social-media">
            <img src={FBLogo} alt="logo facebook" />
            <a
              href="https://www.facebook.com/vidyasenaviharavidyaloka"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </p>
          <p className="footer-social-media">
            <img src={IGLogo} alt="logo instagram" />
            <a
              href="https://www.instagram.com/vidyasenavidyaloka/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};
