import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { formatDate } from '@/utils/format';
import { tzToAbbreviation } from '@/utils/tz';

import { useLatestEvent } from '../apis/getLatestEvent';

type timerProps = {
  startAt: Date;
};

const Timer = ({ startAt }: timerProps) => {
  const startAtTimestamp = new Date(startAt).getTime();

  const [countDown, setCountDown] = useState(startAtTimestamp - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(startAtTimestamp - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [startAtTimestamp]);

  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return (
    <div id="timer" className="timer mt-4">
      <div className="timer__section day">
        <div className="timer_number">{days}</div>
        <div className="timer_label">Hari</div>
      </div>
      <div className="timer__section hour">
        <div className="timer_number">{hours}</div>
        <div className="timer_label">Jam</div>
      </div>
      <div className="timer__section minute">
        <div className="timer_number">{minutes}</div>
        <div className="timer_label">Menit</div>
      </div>
      <div className="timer__section second">
        <div className="timer_number">{seconds}</div>
        <div className="timer_label">Detik</div>
      </div>
    </div>
  );
};

export const Event = () => {
  const latestEventQuery = useLatestEvent();

  let element = (
    <>
      <h2>No Data</h2>
    </>
  );

  const data = latestEventQuery.data;
  if (data) {
    const name = data.name;
    const startAtDate = formatDate(data.startAt, 'dddd, DD MMMM YYYY');
    const startAtTime =
      formatDate(data.startAt, 'HH:mm') + ' ' + tzToAbbreviation(formatDate(data.startAt, 'Z'));

    element = (
      <>
        <Row className="mb-4">
          <Col md={12} className="text-center">
            <h2>Acara Terdekat</h2>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="d-flex px-lg-5">
            <div className="event-detail flex">
              <h3 className="latest-event-detail mb-3">{name}</h3>
              <p>
                <FontAwesomeIcon icon={faCalendarAlt} />
                {startAtDate}
              </p>
              <p>
                <FontAwesomeIcon icon={faClock} />
                {startAtTime}
              </p>
            </div>
          </Col>
          <Col md={6} className="event-timer px-lg-5">
            <h4>Akan dimulai dalam</h4>
            <Timer startAt={data.startAt} />
          </Col>
        </Row>
      </>
    );
  }

  return (
    <section className="latest-event-area">
      <Container>{element}</Container>
    </section>
  );
};
