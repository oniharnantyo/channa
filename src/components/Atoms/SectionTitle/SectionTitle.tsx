import clsx from 'clsx';
import { Col, Row } from 'react-bootstrap';

import { SectionTitleProps, variants } from './SectionTitle.types';

const SectionTitle: SectionTitleProps = ({ variant, title }) => {
  const _variant = variant === 'primary' ? 'text-dark' : 'text-light';

  return (
    <Row className="mb-3">
      <Col md={12} className={clsx('text-center', _variant)}>
        <h2 className="fw-bolder" style={{ fontSize: '1.75rem' }}>
          {title}
        </h2>
      </Col>
    </Row>
  );
};

export default SectionTitle;
