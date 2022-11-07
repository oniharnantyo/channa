import Color from '@styles/Color.module.css';
import clsx from 'clsx';
import { Col, Row, Spinner } from 'react-bootstrap';

const LoadingSpinner = () => {
  return (
    <Row>
      <Col sm={12} className={clsx('text-center', Color.primary)}>
        <Spinner animation="border" />
      </Col>
    </Row>
  );
};

export default LoadingSpinner;
