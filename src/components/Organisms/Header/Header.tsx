import Image from 'next/image';

import HeaderBackgroundImage from '@assets/image/header.webp';
import { Breadcrumb } from '@components/Molecules/Breadcrumb';
import { SectionNoTitle } from '@components/Organisms/Section';
import clsx from 'clsx';
import { Col, Row } from 'react-bootstrap';

import Style from './Header.module.css';

const Header = () => {
  return (
    <div className={clsx(Style.header, 'd-flex')}>
      <div className={Style.backgroundImageWrapper}>
        <Image
          src={HeaderBackgroundImage}
          layout="fill"
          objectFit="cover"
          width={900}
          height={100}
          alt="vidyasena header background"
        />
      </div>
      <div className="align-self-center mx-auto">
        <SectionNoTitle>
          <Row>
            <Col md={12}>
              <Breadcrumb />
            </Col>
          </Row>
        </SectionNoTitle>
      </div>
    </div>
  );
};

export default Header;
