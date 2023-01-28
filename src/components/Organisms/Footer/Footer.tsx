import FBLogo from '@assets/image/fb-logo.svg';
import IGLogo from '@assets/image/ig-logo.svg';
import VSLogo from '@assets/image/vs-logo.webp';
import WALogo from '@assets/image/wa-logo.svg';
import YoutubeLogo from '@assets/image/youtube-logo.svg';
import { FooterTitle } from '@components/Atoms/FooterTitle';
import { LogoImage } from '@components/Atoms/Image';
import { FooterItem } from '@components/Molecules/FooterItem';
import { FooterSocialMedia } from '@components/Molecules/FooterSocialMedia';
import Maps from '@components/Molecules/Maps/Maps';
import clsx from 'clsx';
import { Col, Container, Row } from 'react-bootstrap';

import Style from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={Style.footer}>
      <Container>
        <Row>
          <Col md={4}>
            <LogoImage
              logo={VSLogo.src}
              alt="logo vidyasena"
              height={120}
              width={70}
              className={Style.logo}
            />
            <p className={clsx(Style.quote)}>
              &quot;Biarlah mengorbankan harta demi menyelamatkan anggota tubuh, Biarlah
              mengorbankan anggota tubuh demi menyelamatkan hidupnya, Biarlah mengorbankan harta,
              anggota tubuh dan segalanya, meskipun pula hidupnya, demi kebenaran Dhamma.&quot;
              <br />
              Khuddaka Nikaya, Jataka 28/147
            </p>
          </Col>
          <Col md={4}>
            <FooterItem
              title="Vidyāsenā Vihāra Vidyāloka"
              content={
                'Jalan Kenari, Gang Tanjung 1 No.231, Muja Muju, Kec. Umbulharjo, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55165\nTelp: (0274) 2923432'
              }
            />
            <FooterItem title="Puja Bhakti" content="Setiap Hari Minggu, Pukul 09.00 WIB" />
            <FooterItem
              title="Uposatha"
              content="Setiap tanggal 1 dan 15 Kalender Lunar Pukul 19.00 WIB"
            />
            <FooterItem
              title="Perpustakaan Vidyāsenā"
              content={
                'Setiap Sabtu Pukul 14.00 - 17.00 WIB\nSetiap Minggu Pukul 11.00 - 13.00 WIB'
              }
            />
          </Col>
          <Col md={4}>
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
            <FooterSocialMedia
              name="Youtube"
              logo={YoutubeLogo}
              logoAlt="logo youtube"
              link="https://www.youtube.com/@vidyasenaviharavidyalokayo8744"
            />
            <FooterSocialMedia
              name="Whatsapp"
              logo={WALogo}
              logoAlt="logo whatsapp"
              link="http://wa.me/+628156866543"
            />
            <div style={{ width: '100%' }} className="mt-4">
              <Maps />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
