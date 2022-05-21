import { Col, Container, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { FreebookCard, SectionTitle } from '@/components/Elements';
import BackgroundStyle from '@/styles/Background.module.css';
import ColorStyle from '@/styles/Color.module.css';
import SectionStyle from '@/styles/Section.module.css';

import { useFreebooks } from '../../apis/getFreebooks';

import Style from './Freebook.module.css';

export const Freebook = () => {
  const perPage = 2;
  const freebookQuery = useFreebooks({ perPage });

  const data = freebookQuery.data;

  if (!data) {
    return (
      <>
        <h2>No Data</h2>
      </>
    );
  }

  return (
    <section className={`${SectionStyle.section} ${BackgroundStyle.primary}`}>
      <Container>
        <SectionTitle isPrimaryColor={false}>Freebook Terbaru</SectionTitle>
        <Row>
          {data.map((freebook) => (
            <FreebookCard
              key={freebook.id}
              title={freebook.title}
              author={freebook.author}
              description={freebook.description}
              imageUrl={freebook.imageUrl}
              imageAlt={freebook.imageAlt}
              downloadUrl={freebook.downloadUrl}
            />
          ))}
        </Row>
        <Row>
          <Col md={12} className={Style.more}>
            <LinkContainer to="/freebook">
              <a className={`${ColorStyle.white} float-end`}>Lihat freebook lainnya &gt;&gt;</a>
            </LinkContainer>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
