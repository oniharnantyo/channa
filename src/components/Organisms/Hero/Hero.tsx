import Image from 'next/image';
import Link from 'next/link';

import HomeHeroImage from '@assets/image/hero-banner.webp';
import { StyledButton } from '@components/Atoms/StyledButton';
import clsx from 'clsx';
import { Col, Container, Row } from 'react-bootstrap';

import Style from './Hero.module.css';

const Hero = () => {
  return (
    <section className={clsx(Style.hero, 'd-flex', 'text-center')}>
      <div className={Style.backgroundImageWrapper}>
        <Image
          src={HomeHeroImage}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          alt="altar vihara vidyaloka"
        />
      </div>
      <Container className={clsx('align-self-center', Style.heroContent)}>
        <Row>
          <Col md={2} />
          <Col md={8}>
            <div className={Style.content}>
              <h5>VIHĀRA VIDYĀLOKA</h5>
              <h1>VIDYĀSENĀ</h1>
              <p className="px-md-14">
                Organisasi sosial pemuda Buddha yang bermarkas di Vihara Vidyaloka Yogyakarta.
                Didirikan pada tanggal 1 Februari 1987, telah menjadi salah satu organisasi pemuda
                Buddhis utama di bawah bimbingan Sangha Theravada Indonesia (STI).
              </p>
              <Link href="/profil" passHref>
                <StyledButton variant="primary" size="lg" rounded={false}>
                  Baca Selengkapnya
                </StyledButton>
              </Link>
            </div>
          </Col>
          <Col md={2} />
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
