import Image from 'next/image';
import Link from 'next/link';

import DonateImage from '@assets/image/donate/daa.webp';
import { StyledButton } from '@components/Atoms/StyledButton';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { Col, Row } from 'react-bootstrap';

import { SectionNoTitle } from '../Section';
import Style from './HomeDonate.module.scss';

const HomeDonate = () => {
  return (
    <div className="d-flex align-items-center justify-content-center h-100 px-3 px-md-0">
      <SectionNoTitle>
        <Row className={(Style.content, 'g-5')}>
          <motion.div
            className="col-md-6"
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
          </motion.div>
          <motion.div
            className="col-md-6 my-auto"
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
          </motion.div>
        </Row>
      </SectionNoTitle>
    </div>
  );
};

export default HomeDonate;
