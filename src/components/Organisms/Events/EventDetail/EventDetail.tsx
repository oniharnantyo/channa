import Image from 'next/image';

import { Content } from '@components/Atoms/Content';
import { Label } from '@components/Atoms/Label';
import { Title } from '@components/Atoms/Title';
import { IEvent } from '@domains/event';
import { faCalendarAlt, faClock, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { getEventBySlug } from '@services/event/getEventBySlug';
import { formatDate } from '@utils/format';
import { tzToAbbreviation } from '@utils/tz';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useQuery } from 'react-query';

import { SectionNoTitle } from '../../Section';
import { EventDetailProps } from './EventDetail.types';

const EventDetail: EventDetailProps = ({ slug }) => {
  const [event, setEvent] = useState({} as IEvent);

  const {
    data: eventData,
    error,
    refetch,
    isFetching,
  } = useQuery(['getEventBySlug', slug], () => getEventBySlug({ slug }), {
    retry: false,
  });

  useEffect(() => {
    if (eventData) {
      setEvent(eventData);
    }
  }, [eventData]);

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
        <Col sm={12} md={6} lg={3}>
          <Title title={event.title}></Title>
          <Label variant="primary" size="lg" icon={faCalendarAlt} label={date}></Label>
          <Label variant="primary" size="lg" icon={faClock} label={time}></Label>
          <Label variant="primary" size="lg" icon={faMapMarkedAlt} label={event.location} />
        </Col>
        <Col lg={2} />
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
