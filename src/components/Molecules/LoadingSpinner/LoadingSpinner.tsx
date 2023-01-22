import { Col, Row, Spinner } from 'react-bootstrap';

const LoadingSpinner = () => {
  return (
    <Row>
      <Col sm={12} className="d-flex align-items-center justify-content-center text-dark">
        <Spinner animation="border" />
      </Col>
    </Row>
  );
};

export default LoadingSpinner;
