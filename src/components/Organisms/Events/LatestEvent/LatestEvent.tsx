import { CenteredDiv } from '@components/Atoms/CenteredDiv';
import { NoData } from '@components/Atoms/NoData';
import { TimeCounter } from '@components/Molecules/TimeCounter';
import { faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LazyMotionDomAnimation from '@lib/framer';
import { getLatestEvent } from '@services/event/getLatestEvent';
import { formatDate } from '@utils/format';
import { tzToAbbreviation } from '@utils/tz';
import clsx from 'clsx';
import { m } from 'framer-motion';
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

  if (!latestEvent && !isFetching) {
    return (
      <Section title="Event Terdekat" variant="primary">
        <CenteredDiv minHeight="200px">
          <NoData className="text-white" message="Tidak ada event terdekat" />
        </CenteredDiv>
      </Section>
    );
  }

  return (
    <Section title="Event Terdekat" variant="primary">
      <LazyMotionDomAnimation>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
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
        </m.div>
      </LazyMotionDomAnimation>
    </Section>
  );
};

export default LatestEvent;
