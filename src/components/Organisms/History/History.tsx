import Image from 'next/image';

import { Content } from '@components/Atoms/Content';
import { Title } from '@components/Atoms/Title';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Color from '@styles/Color.module.css';
import clsx from 'clsx';
import { Card, Container, Row } from 'react-bootstrap';

import { SectionNoTitle } from '../Section';
import Style from './History.module.css';
import { histories } from './data';

const History = () => {
  const { intro, timelines } = histories;

  return (
    <SectionNoTitle variant="white">
      <Row>
        <Title title={'Sejarah'} isCenterAlign />
      </Row>
      <div className="my-5">
        <Content>{intro}</Content>
      </div>
      <Container>
        <div className={Style.mainTimeline}>
          {timelines &&
            timelines.map((timeline, index) => {
              const isEventIndex = index % 2 === 0;
              return (
                <div
                  key={timeline.year}
                  className={clsx(
                    Style.timeline,
                    { [Style.left]: isEventIndex },
                    { [Style.right]: !isEventIndex }
                  )}
                >
                  <Card>
                    {timeline.image && (
                      <Image
                        src={timeline.image}
                        width="100"
                        height="60"
                        layout="responsive"
                        objectFit="cover"
                      />
                    )}
                    <Card.Body>
                      <p className="text-muted mb-2">
                        <FontAwesomeIcon icon={faClock} className={Color.primary} /> {timeline.year}
                      </p>
                      {timeline.text}
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
        </div>
      </Container>
    </SectionNoTitle>
  );
};

export default History;
