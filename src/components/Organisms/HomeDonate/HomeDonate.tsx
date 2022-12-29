import Link from 'next/link';

import DonateBannerImage from '@assets/image/donate-banner.webp';
import { StyledButton } from '@components/Atoms/StyledButton';
import clsx from 'clsx';
import { motion } from 'framer-motion';
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
              <motion.div
                className="col-md-6 mx-md-auto mx-lg-auto my-md-auto my-lg-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <h2 className={clsx(Style.title, 'text-md-center', 'text-lg-center')}>
                  Mari Berdana
                </h2>
              </motion.div>
              <motion.div
                className="col-md-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <p className={clsx(Style.description)}>
                  Seluruh dana yang dikumpulkan akan digunakan untuk program kerja Vidyasena dan
                  operasional Vihara Vidyaloka
                </p>
                <Link href={'/dana'}>
                  <StyledButton size="sm" variant={'primary'}>
                    Dana Sekarang
                  </StyledButton>
                </Link>
              </motion.div>
            </Row>
          </SectionNoTitle>
        </div>
      </Parallax>
    </div>
  );
};

export default HomeDonate;
