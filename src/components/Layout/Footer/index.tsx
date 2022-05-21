import { Col, Container, Row } from 'react-bootstrap';

import FBLogo from '@/assets/fb-logo.svg';
import IGLogo from '@/assets/ig-logo.svg';
import VSLogo from '@/assets/vs-logo.svg';
import ColorStyle from '@/styles/Color.module.css';

import Style from './Footer.module.css';

export const Footer = () => {
  return (
    <section className={Style.footer}>
      <Container>
        <Row>
          <Col md={4} lg={4}>
            <img src={VSLogo} alt="logo vidyasena" className={Style.logo}></img>
            <p className={`${Style.quote} ${ColorStyle.grey}`}>
              &quot;Biarlah mengorbankan harta demi menyelamatkan anggota tubuh, Biarlah
              mengorbankan anggota tubuh demi menyelamatkan hidupnya, Biarlah mengorbankan harta,
              anggota tubuh dan segalanya, meskipun pula hidupnya, demi kebenaran Dhamma.&quot;
            </p>
          </Col>
          <Col md={4} lg={4}>
            <p className={`${Style.title} ${ColorStyle.primary}`}>Vidyāsenā Vihāra Vidyāloka</p>
            <p className={`${Style.content} ${ColorStyle.grey}`}>
              Jalan Kenari, Gang Tanjung 1 No.231, Muja Muju, Kec. Umbulharjo, Kota Yogyakarta,
              Daerah Istimewa Yogyakarta 55165
            </p>
            <p className={`${Style.title} ${ColorStyle.primary}`}>Puja Bhakti</p>
            <p className={`${Style.content} ${ColorStyle.grey}`}>
              Setiap Hari Minggu, Pukul 09.00 WIB
            </p>
            <p className={`${Style.title} ${ColorStyle.primary}`}>Uposatha</p>
            <p className={`${Style.content} ${ColorStyle.grey}`}>
              Setiap tanggal 1 dan 15 Kalender Lunar Pukul 19.00 WIB
            </p>
            <p className={`${Style.title} ${ColorStyle.primary}`}>Perpustakaan Vidyāsenā</p>
            <p className={`${Style.content} ${ColorStyle.grey}`}>
              Setiap Sabtu Pukul 13.00 - 15.00 WIB
              <br />
              Setiap Minggu Pukul 11.00 - 13.00 WIB
            </p>
          </Col>
          <Col md={4} lg={4}>
            <p className={`${Style.title} ${ColorStyle.primary}`}>Sosial Media Vidyāloka</p>
            <p className={Style.socialMedia}>
              <img src={FBLogo} alt="logo facebook" />
              <a
                href="https://www.facebook.com/vidyasenaviharavidyaloka"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </p>
            <p className={Style.socialMedia}>
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
    </section>
  );
};
