import Link from 'next/link';

import HomeBanner from '@assets/image/home-banner.webp';
import { StyledButton } from '@components/Atoms/StyledButton';
import clsx from 'clsx';
import { Col, Container, Row } from 'react-bootstrap';

import Style from './Banner.module.css';

const Banner = () => {
  const bannerBackgroundStyle = {
    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${HomeBanner.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 0px',
  };

  return (
    <section className={clsx(Style.banner, 'd-flex', 'text-center')} style={bannerBackgroundStyle}>
      <Container className="align-self-center">
        <Row>
          <Col md={12}>
            <div className={Style.content}>
              <h5>VIHĀRA VIDYĀLOKA</h5>
              <h1>VIDYĀSENĀ</h1>
              <p className="px-md-14">
                Organisasi sosial pemuda Buddha yang bermarkas di Vihara Vidyaloka Yogyakarta.
                Didirikan pada tanggal 1 Februari 1987, telah menjadi salah satu organisasi pemuda
                Buddhis utama di bawah bimbingan Sangha Theravada Indonesia (STI).
              </p>
              <Link href="/tentang-kami" passHref>
                <StyledButton variant="primary" size="lg" rounded={false}>
                  Baca Selengkapnya
                </StyledButton>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
