import Image from 'next/image';
import Link from 'next/link';

import DonateImage from '@assets/image/donate/daa.webp';
import { StyledButton } from '@components/Atoms/StyledButton';
import clsx from 'clsx';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import sal from 'sal.js';

import { SectionNoTitle } from '../Section';
import Style from './HomeDonate.module.scss';

const HomeDonate = () => {
  useEffect(() => {
    sal();
  }, []);

  return (
    <SectionNoTitle>
      <Row className={(Style.content, 'px-md-5')}>
        <div
          className="col-md-6 align-self-center"
          data-sal="slide-right"
          data-sal-delay={200}
          data-sal-duration={700}
          data-sal-easing="ease-in-out-quad"
        >
          <Image src={DonateImage} height={400} width={700} objectFit="cover"></Image>
        </div>
        <div
          className="col-md-6 my-auto py-4"
          data-sal="slide-right"
          data-sal-delay={0}
          data-sal-duration={700}
          data-sal-easing="ease-in-out-quad"
        >
          <h2 className={clsx(Style.title)}>Mari Berdana</h2>
          <p className={clsx(Style.description)}>
            Berdana yang benar dapat membawa pada kebebasan dari penderitaan. Berdana dengan tujuan
            melatih diri untuk melepas, tidak mengharapkan imbalan, buah karma, pahala, balasan, dan
            sebagainya.
          </p>
          <Link href={'/dana'}>
            <StyledButton size="lg" variant="primary">
              Dana Sekarang
            </StyledButton>
          </Link>
        </div>
      </Row>
    </SectionNoTitle>
  );
};

export default HomeDonate;
