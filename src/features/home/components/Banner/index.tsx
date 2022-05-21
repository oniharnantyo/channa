import { Container, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import HomeBanner from '@/assets/home-banner.jpg';
import { StyledButton } from '@/components/Elements/Button';

import Style from './Banner.module.css';

const bannerBackground = {
  backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${HomeBanner})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50% 0px',
};

export const Banner = () => {
  return (
    <section className={`${Style.banner} d-flex text-center`} style={bannerBackground}>
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
              <LinkContainer to="/tentang-kami">
                <StyledButton rounded={false}>Baca Selengkapnya</StyledButton>
              </LinkContainer>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
