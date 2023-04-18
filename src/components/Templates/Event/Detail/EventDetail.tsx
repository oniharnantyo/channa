import Head from 'next/head';
import dynamic from 'next/dynamic';
import Link from 'next/link';

import { StyledButton } from '@components/Atoms/StyledButton';
import { EventDetail as OEventDetail } from '@components/Organisms/Events/EventDetail';
import { SectionNoTitle } from '@components/Organisms/Section';
import { Col, Row } from 'react-bootstrap';

import { EventDetailProps } from './EventDetail.types';

const Header = dynamic(() => import('../../../Organisms/Header/Header'));

const EventDetail: EventDetailProps = ({ event }) => {
  const title = event.title;
  const description =
    'Vidyāsenā merupakan organisasi mahasiswa dan pelajar Buddhis Indonesia di Vihāra Vidyāloka Yogyakarta. Vidyāsenā berarti Prajurit pengetahuan Dhamma.';
  const image = event.imageURL;
  const slug = event.slug;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={'/article/' + slug} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
      </Head>
      <Header />
      <OEventDetail event={event} />
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
