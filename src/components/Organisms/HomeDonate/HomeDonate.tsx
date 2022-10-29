import Image from 'next/image';
import Link from 'next/link';

import DonateBannerImage from '@assets/image/donate-banner.webp';
import { StyledButton } from '@components/Atoms/StyledButton';
import ColorStyle from '@styles/Color.module.css';
import clsx from 'clsx';
import { Col, Row } from 'react-bootstrap';

import { SectionNoTitle } from '../Section';
import Style from './HomeDonate.module.css';

const HomeDonate = () => {
  const background = (
    <div className={Style.backgroundImageWrapper}>
      <Image src={DonateBannerImage} layout="fill" objectFit="cover" objectPosition="" />
    </div>
  );

  return (
    <div className={clsx(Style.donate, 'd-flex')}>
      <div className={Style.backgroundImageWrapper}>
        <Image src={DonateBannerImage} layout="fill" objectFit="cover" objectPosition="" />
      </div>
      <div className="align-self-center mx-auto">
        <SectionNoTitle>
          <Row className={Style.content}>
            <Col md={6} className="mx-md-auto mx-lg-auto my-md-auto my-lg-auto">
              <h2 className={clsx(Style.title, 'text-md-center', 'text-lg-center')}>
                Mari Berdana
              </h2>
            </Col>
            <Col md={6}>
              <p className={clsx(Style.description, ColorStyle.primary)}>
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
    </div>
  );
};

export default HomeDonate;
