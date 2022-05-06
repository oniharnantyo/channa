import clsx from 'clsx';
import { Col, Row } from 'react-bootstrap';

type sectionTitleProps = {
  title: string;
  isPrimaryColor: boolean;
};

export const SectionTitle = ({ title, isPrimaryColor }: sectionTitleProps) => {
  return (
    <Row className="mb-4">
      <Col
        md={12}
        className={clsx(
          'text-center',
          { ['color-primary']: isPrimaryColor },
          { ['color-white']: !isPrimaryColor }
        )}
      >
        <h2>{title}</h2>
      </Col>
    </Row>
  );
};
