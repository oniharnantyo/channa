import Image from 'next/image';
import Link from 'next/link';

import DonateBannerImage from '@assets/image/donate-banner.webp';
import { StyledButton } from '@components/Atoms/StyledButton';
import clsx from 'clsx';
import { Col, Row } from 'react-bootstrap';
import { Parallax } from 'react-parallax';

import { SectionNoTitle } from '../Section';
import Style from './HomeDonate.module.scss';

const HomeDonate = () => {
  return (
    <div className={clsx(Style.donate, 'd-flex')}>
      <Parallax
        bgImage={DonateBannerImage.src}
        bgImageAlt={'Donasi'}
        style={{
          width: '100%',
        }}
        contentClassName={Style.contentWrapper}
        strength={400}
        lazy
      >
        <div className="d-flex align-items-center justify-content-center h-100">
          <SectionNoTitle>
            <Row className={Style.content}>
              <Col md={6} className="mx-md-auto mx-lg-auto my-md-auto my-lg-auto">
                <h2 className={clsx(Style.title, 'text-md-center', 'text-lg-center')}>
                  Mari Berdana
                </h2>
              </Col>
              <Col md={6}>
                <p className={clsx(Style.description)}>
                  Seluruh dana yang dikumpulkan akan digunakan untuk program kerja Vidyasena dan
                  operasional Vihara Vidyaloka
                </p>
                <Link href={'/dana'}>
                  <StyledButton size="sm" variant={'primary'}>
                    Dana Sekarang
                  </StyledButton>
                </Link>
              </Col>
            </Row>
          </SectionNoTitle>
        </div>
      </Parallax>
    </div>
  );
};

export default HomeDonate;
