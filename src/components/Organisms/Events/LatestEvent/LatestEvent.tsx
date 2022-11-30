import { TimeCounter } from '@components/Molecules/TimeCounter';
import { faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getLatestEvent } from '@services/event/getLatestEvent';
import { formatDate } from '@utils/format';
import { tzToAbbreviation } from '@utils/tz';
import clsx from 'clsx';
import { Col, Row } from 'react-bootstrap';
import { useQuery } from 'react-query';

import { Section } from '../../Section';
import Style from './LatestEvent.module.scss';

const LatestEvent = () => {
  const {
    data: latestEvent,
    error,
    refetch,
    isFetching,
  } = useQuery(['getLatestEvent'], () => getLatestEvent(), {
    retry: false,
  });

  const name = latestEvent?.title;
  const startAt = latestEvent?.startAt;
  const startAtDate = formatDate(startAt as Date, 'dddd, DD MMMM YYYY');
  const startAtTime =
    formatDate(startAt as Date, 'HH:mm') + ' ' + tzToAbbreviation(formatDate(startAt as Date, 'Z'));

  return (
    <Section title="Event Terdekat" variant="primary">
      <Row className="px-3 px-lg-5">
        <Col md={6} className="d-flex">
          <div>
            <h3 className={clsx(Style.title, 'mb-3')}>{name}</h3>
            <p className={Style.text}>
              <FontAwesomeIcon icon={faCalendarAlt} className={Style.icon} />
              {startAtDate}
            </p>
            <p className={Style.text}>
              <FontAwesomeIcon icon={faClock} className={Style.icon} />
              {startAtTime}
            </p>
          </div>
        </Col>
        <Col md={6} className={clsx(Style.timeCounter)}>
          <h4>Akan dimulai dalam</h4>
          <TimeCounter date={startAt as Date} />
        </Col>
      </Row>
    </Section>
  );
};

export default LatestEvent;
