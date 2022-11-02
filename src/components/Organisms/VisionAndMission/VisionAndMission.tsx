import Image from 'next/image';

import { Content } from '@components/Atoms/Content';
import Color from '@styles/Color.module.css';
import clsx from 'clsx';
import { Col, Container, Row } from 'react-bootstrap';

import { SectionNoTitle } from '../Section';
import { visionAndMission } from './data';

const VisionAndMission = () => {
  const { vision, mission, image, imageAlt } = visionAndMission;

  return (
    <SectionNoTitle variant="white">
      <Row className="my-md-5">
        <Col md={6}>
          <h1 className={clsx('fw-bold', 'mb-4', 'ms-2', Color.primary)}>Visi dan Misi</h1>
          <div className="mb-3">
            <Content>
              <h5 className={clsx('fw-bolder', Color.primary)}>Visi</h5>
              {vision}
            </Content>
          </div>
          <div className="mb-3">
            <Content>
              <h5 className={clsx('fw-bolder', Color.primary)}>Misi</h5>
              {mission}
            </Content>
          </div>
        </Col>
        <Col md={6}>
          <Container>
            <Image
              src={image}
              alt={imageAlt}
              width="500"
              height="300"
              layout="responsive"
              objectFit="cover"
            ></Image>
          </Container>
        </Col>
      </Row>
    </SectionNoTitle>
  );
};

export default VisionAndMission;
