import ColorStyle from '@styles/Color.module.css';
import clsx from 'clsx';
import { Col, Row } from 'react-bootstrap';

import { SectionTitleProps, variants } from './SectionTitle.typed';

const SectionTitle: SectionTitleProps = ({ variant, title }) => {
  const _variant = variant === 'primary' ? ColorStyle.primary : ColorStyle.white;

  return (
    <Row className="mb-3">
      <Col md={12} className={clsx('text-center', _variant)}>
        <h3>{title}</h3>
      </Col>
    </Row>
  );
};

export default SectionTitle;
