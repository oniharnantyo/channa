import Image from 'next/image';
import Link from 'next/link';

import DonateImage from '@assets/image/donate/daa.webp';
import { StyledButton } from '@components/Atoms/StyledButton';
import LazyMotionDomAnimation from '@lib/framer';
import clsx from 'clsx';
import { m } from 'framer-motion';
import { Row } from 'react-bootstrap';

import { SectionNoTitle } from '../Section';
import Style from './HomeDonate.module.scss';

const HomeDonate = () => {
  return (
    <SectionNoTitle>
      <Row className={(Style.content, 'px-md-5')}>
        <LazyMotionDomAnimation>
          <m.div
            className="col-md-6 align-self-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Image src={DonateImage} height={400} width={700} objectFit="cover"></Image>
          </m.div>
          <m.div
            className="col-md-6 my-auto py-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h2 className={clsx(Style.title)}>Mari Berdana</h2>
            <p className={clsx(Style.description)}>
              Berdana yang benar dapat membawa pada kebebasan dari penderitaan. Berdana dengan
              tujuan melatih diri untuk melepas, tidak mengharapkan imbalan, buah karma, pahala,
              balasan, dan sebagainya.
            </p>
            <Link href={'/dana'}>
              <StyledButton size="lg" variant="primary">
                Dana Sekarang
              </StyledButton>
            </Link>
          </m.div>
        </LazyMotionDomAnimation>
      </Row>
    </SectionNoTitle>
  );
};

export default HomeDonate;
