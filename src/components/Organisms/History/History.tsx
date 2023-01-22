import dynamic from 'next/dynamic';
import Image from 'next/image';

import { Content } from '@components/Atoms/Content';
import { Title } from '@components/Atoms/Title';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

import { SectionNoTitle } from '../Section';
import Style from './History.module.scss';
import { histories } from './data';

const History = () => {
  const { intro, timelines } = histories;
  const [isImageLoading, setImageLoading] = useState(true);

  return (
    <SectionNoTitle variant="white" minHeight="60vh">
      <Row>
        <Title title="Sejarah" isCenterAlign />
      </Row>
      <Row>
        <Col md={2} />
        <Col>
          <Content>{intro}</Content>
          <Container className="mt-2 mt-md-5">
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
                            onLoadingComplete={() => setImageLoading(false)}
                            className={clsx({
                              ['placeholder bg-muted placeholder-glow']: isImageLoading,
                            })}
                          />
                        )}
                        <Card.Body>
                          <p className="text-dark m-1 m-md-2">
                            <FontAwesomeIcon icon={faClock} /> {timeline.year}
                          </p>
                          <div className="text-dark m-1 m-md-2">{timeline.text}</div>
                        </Card.Body>
                      </Card>
                    </div>
                  );
                })}
            </div>
          </Container>
        </Col>
        <Col md={2} />
      </Row>
    </SectionNoTitle>
  );
};

export default History;
