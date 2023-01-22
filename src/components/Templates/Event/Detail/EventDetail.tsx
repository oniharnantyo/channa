import dynamic from 'next/dynamic';
import Link from 'next/link';

import { StyledButton } from '@components/Atoms/StyledButton';
import { EventDetail as OEventDetail } from '@components/Organisms/Events/EventDetail';
import { SectionNoTitle } from '@components/Organisms/Section';
import { Col, Row } from 'react-bootstrap';

import { EventDetailProps } from './EventDetail.types';

const Header = dynamic(() => import('../../../Organisms/Header/Header'));

const EventDetail: EventDetailProps = ({ slug }) => {
  return (
    <>
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
    </>
  );
};

export default EventDetail;
