import Link from 'next/link';

import { StyledButton } from '@components/Atoms/StyledButton';
import { EventDetail as OEventDetail } from '@components/Organisms/EventDetail';
import { Header } from '@components/Organisms/Header';
import { SectionNoTitle } from '@components/Organisms/Section';
import { Layout } from '@components/Templates/Layout';
import { Col, Row } from 'react-bootstrap';

import { EventDetailProps } from './EventDetail.types';

const EventDetail: EventDetailProps = ({ slug }) => {
  return (
    <Layout>
      <Header />
      <OEventDetail slug={slug} />
      <SectionNoTitle>
        <Row>
          <Col className="text-center">
            <Link href={'/acara'}>
              <StyledButton variant="outline-primary" size="lg">
                Lihat Acara Lainnya
              </StyledButton>
            </Link>
          </Col>
        </Row>
      </SectionNoTitle>
    </Layout>
  );
};

export default EventDetail;
