import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import HomeHeroImage from '@assets/image/hero-banner.webp';
import { StyledButton } from '@components/Atoms/StyledButton';
import LazyMotionDomAnimation from '@lib/framer';
import clsx from 'clsx';
import { Col, Container, Row } from 'react-bootstrap';

import Style from './Hero.module.css';

const Hero = () => {
  return (
    <>
      <section className={clsx(Style.hero, 'd-flex', 'text-center')}>
        <div className={Style.backgroundImageWrapper}>
          <Image
            src={HomeHeroImage}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            alt="altar vihara vidyaloka"
            priority
          />
        </div>
        <Container className={clsx('align-self-center', Style.heroContent)}>
          <Row>
            <Col md={2} />
            <Col md={8}>
              <div className={Style.content}>
                <h2>VIHĀRA VIDYĀLOKA</h2>
                <h1>VIDYĀSENĀ</h1>
                <p className="px-md-14">
                  Vidyāsenā merupakan salah satu organisasi mahasiswa dan pelajar Buddhis Indonesia
                  yang berada di Vihāra Vidyāloka Yogyakarta. "Vidya" berarti pengetahuan Dhamma dan
                  "Sena" berarti prajurit atau tentara penjaga, sehingga Vidyāsenā berarti Prajurit
                  pengetahuan Dhamma.
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
    </>
  );
};

export default Hero;
