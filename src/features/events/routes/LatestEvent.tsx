import { faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';

import { SectionTitle } from '@/components/Elements';
import BackgroundStyle from '@/styles/Background.module.css';
import ColorStyle from '@/styles/Color.module.css';
import SectionStyle from '@/styles/Section.module.css';
import { formatDate } from '@/utils/format';
import { tzToAbbreviation } from '@/utils/tz';

import { useLatestEvent } from '../apis/getLatestEvent';
import { Timer } from '../components/Timer';

import Style from './LatestEvent.module.css';

export const LatestEvent = () => {
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
        <SectionTitle isPrimaryColor={false}>Acara Terdekat</SectionTitle>
        <Row>
          <Col md={6} className="d-flex px-lg-5">
            <div>
              <h3 className={`${Style.title} mb-3`}>{name}</h3>
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
          <Col md={6} className={`${Style.timer} px-lg-5`}>
            <h4>Akan dimulai dalam</h4>
            <Timer startAt={data.startAt} />
          </Col>
        </Row>
      </>
    );
  }

  return (
    <section className={`${SectionStyle.section} ${BackgroundStyle.blue} ${ColorStyle.white}`}>
      <Container>{element}</Container>
    </section>
  );
};
