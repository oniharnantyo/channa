import { Col, Container, Row } from 'react-bootstrap';

export const Donate = () => {
  return (
    <section className="donate-section">
      <Container>
        <Row>
          <Col md={6}>
            <h2>Mari Berdana</h2>
          </Col>
          <Col md={6}>
            <p>
              Seluruh dana yang dikumpulkan akan digunakan untuk program kerja Vidyasena dan
              operasional Vihara Vidyaloka
            </p>
            {/* <ButtonPrimary text="Donasi"></ButtonPrimary> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
