import FBLogo from '@assets/image/fb-logo.svg';
import IGLogo from '@assets/image/ig-logo.svg';
import VSLogo from '@assets/image/vs-logo.svg';
import { FooterTitle } from '@components/Atoms/FooterTitle';
import { LogoImage } from '@components/Atoms/Image';
import { FooterItem } from '@components/Molecules/FooterItem';
import { FooterSocialMedia } from '@components/Molecules/FooterSocialMedia';
import ColorStyle from '@styles/Color.module.css';
import clsx from 'clsx';
import { Col, Container, Row } from 'react-bootstrap';

import Style from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={Style.footer}>
      <Container>
        <Row>
          <Col md={4} lg={4}>
            <LogoImage logo={VSLogo} alt="logo vidyasena" className={Style.logo} />
            <p className={clsx(Style.quote, ColorStyle.grey)}>
              &quot;Biarlah mengorbankan harta demi menyelamatkan anggota tubuh, Biarlah
              mengorbankan anggota tubuh demi menyelamatkan hidupnya, Biarlah mengorbankan harta,
              anggota tubuh dan segalanya, meskipun pula hidupnya, demi kebenaran Dhamma.&quot;
            </p>
          </Col>
          <Col md={4} lg={4}>
            <FooterItem
              title="Vidyāsenā Vihāra Vidyāloka"
              content="Jalan Kenari, Gang Tanjung 1 No.231, Muja Muju, Kec. Umbulharjo, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55165"
            />
            <FooterItem title="Puja Bhakti" content="Setiap Hari Minggu, Pukul 09.00 WIB" />
            <FooterItem
              title="Uposatha"
              content="Setiap tanggal 1 dan 15 Kalender Lunar Pukul 19.00 WIB"
            />
            <FooterItem
              title="Perpustakaan Vidyāsenā"
              content={
                'Setiap Sabtu Pukul 13.00 - 15.00 WIB\nSetiap Minggu Pukul 11.00 - 13.00 WIB'
              }
            />
          </Col>
          <Col md={4} lg={4}>
            <FooterTitle title={'Sosial Media Vidyāsenā'} />
            <FooterSocialMedia
              name="Facebook"
              logo={FBLogo}
              logoAlt="logo facebook"
              link="https://www.facebook.com/vidyasenaviharavidyaloka"
            />
            <FooterSocialMedia
              name="Instagram"
              logo={IGLogo}
              logoAlt="logo instagram"
              link="https://www.instagram.com/vidyasenavidyaloka"
            />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
