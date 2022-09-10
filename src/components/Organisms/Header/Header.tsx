import { Breadcrumb } from '@components/Molecules/Breadcrumb';
import clsx from 'clsx';
import { Col, Container, Row } from 'react-bootstrap';

import Style from './Header.module.css';

const Header = () => {
  return (
    <section className={clsx(Style.background, 'd-flex', 'text-center')}>
      <Container className="align-self-center">
        <Row>
          <Col md={12}>
            <Breadcrumb />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Header;
