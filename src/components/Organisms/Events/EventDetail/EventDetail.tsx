import Image from 'next/image';

import { Content } from '@components/Atoms/Content';
import { Label } from '@components/Atoms/Label';
import { Title } from '@components/Atoms/Title';
import { faCalendarAlt, faClock, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { formatDate } from '@utils/format';
import { tzToAbbreviation } from '@utils/tz';
import { Col, Row } from 'react-bootstrap';

import { SectionNoTitle } from '../../Section';
import { EventDetailProps } from './EventDetail.types';

const EventDetail: EventDetailProps = ({ event }) => {
  const date = formatDate(event.startAt, 'DD MMMM YYYY');
  const time =
    formatDate(event.startAt as Date, 'HH:mm') +
    ' ' +
    tzToAbbreviation(formatDate(event.startAt as Date, 'Z'));

  return (
    <SectionNoTitle>
      <Row className="mb-4">
        <Col lg={2} />
        <Col sm={12} md={6} lg={5}>
          <Image
            src={event.imageURL as string}
            alt={event?.imageDescription}
            width="500"
            height="300"
            layout="responsive"
            objectFit="contain"
          />
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Title title={event.title}></Title>
          <Label variant="primary" icon={faCalendarAlt} label={date}></Label>
          <Label variant="primary" icon={faClock} label={time}></Label>
          <Label variant="primary" icon={faMapMarkedAlt} label={event.location} />
        </Col>
        <Col lg={1} />
      </Row>
      <Row>
        <Col md={2} />
        <Col md={8}>
          <Content>
            <div dangerouslySetInnerHTML={{ __html: event.content }} />
          </Content>
        </Col>
        <Col md={2} />
      </Row>
    </SectionNoTitle>
  );
};

export default EventDetail;
