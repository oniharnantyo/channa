import clsx from 'clsx';
import { Col, Row } from 'react-bootstrap';

import ColorStyle from '@/styles/Color.module.css';
import { Children } from '@/types';

type sectionTitleProps = {
  isPrimaryColor: boolean;
} & Children;

export const SectionTitle = ({ isPrimaryColor, children }: sectionTitleProps) => {
  return (
    <Row className="mb-3">
      <Col
        md={12}
        className={clsx(
          'text-center',
          { [ColorStyle.primary]: isPrimaryColor },
          { [ColorStyle.white]: !isPrimaryColor }
        )}
      >
        <h3>{children}</h3>
      </Col>
    </Row>
  );
};
