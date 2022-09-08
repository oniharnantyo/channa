import { StyledButton } from '@components/Atoms/StyledButton';
import ColorStyle from '@styles/Color.module.css';
import clsx from 'clsx';
import { Col, Row } from 'react-bootstrap';

import { SectionNoTitle } from '../Section';
import Style from './HomeDonate.module.css';

const HomeDonate = () => {
  return (
    <SectionNoTitle variant={'white'}>
      <Row>
        <Col md={6} className="mx-md-auto mx-lg-auto my-md-auto my-lg-auto">
          <h2 className={clsx(Style.title, 'text-md-center', 'text-lg-center')}>Mari Berdana</h2>
        </Col>
        <Col md={6}>
          <p className={clsx(Style.description, ColorStyle.primary)}>
            Seluruh dana yang dikumpulkan akan digunakan untuk program kerja Vidyasena dan
            operasional Vihara Vidyaloka
          </p>
          <StyledButton size="sm" variant={'primary'}>
            Donasi
          </StyledButton>
        </Col>
      </Row>
    </SectionNoTitle>
  );
};

export default HomeDonate;
