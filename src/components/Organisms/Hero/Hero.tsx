import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import HomeHeroImage from '@assets/image/hero-banner.webp';
import { StyledButton } from '@components/Atoms/StyledButton';
import LazyMotionDomAnimation from '@lib/framer';
import clsx from 'clsx';
import { m } from 'framer-motion';
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
                <LazyMotionDomAnimation>
                  <m.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <h2>VIHĀRA VIDYĀLOKA</h2>
                    <h1>VIDYĀSENĀ</h1>
                  </m.div>
                  <m.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <p className="px-md-14">
                      Vidyāsenā merupakan salah satu organisasi mahasiswa dan pelajar Buddhis
                      Indonesia yang berada di Vihāra Vidyāloka Yogyakarta. "Vidya" berarti
                      pengetahuan Dhamma dan "Sena" berarti prajurit atau tentara penjaga, sehingga
                      Vidyāsenā berarti Prajurit pengetahuan Dhamma.
                    </p>
                  </m.div>
                  <m.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <Link href="/profil" passHref>
                      <StyledButton variant="primary" size="lg" rounded={false}>
                        Baca Selengkapnya
                      </StyledButton>
                    </Link>
                  </m.div>
                </LazyMotionDomAnimation>
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
