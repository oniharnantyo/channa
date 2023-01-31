import Image from 'next/image';
import Link from 'next/link';

import { Content } from '@components/Atoms/Content';
import { Label } from '@components/Atoms/Label';
import { Title } from '@components/Atoms/Title';
import { faCalendar, faUser } from '@fortawesome/free-solid-svg-icons';
import { Col, Container, Row } from 'react-bootstrap';

import { DonateItemProps } from './DonateItem.types';

const DonateItem: DonateItemProps = ({
  title,
  account,
  confirm,
  description,
  imageURL,
  imageAlt,
  isImageRight = false,
  confirmUrl,
}) => {
  const image = (
    <Image
      src={imageURL}
      alt={imageAlt}
      width="500"
      height="300"
      layout="responsive"
      objectFit="cover"
    />
  );

  const content = (
    <>
      <div className="mb-2">
        <h2 className="text-dark fw-bolder">{title}</h2>
        <div className="">
          <Label variant={'primary'} icon={faCalendar} label={account} />
        </div>
        <div>
          <Label variant={'primary'} icon={faUser} label={confirm} url={confirmUrl} />
        </div>
      </div>
      <Content>{description}</Content>
    </>
  );

  let item = (
    <>
      <Col lg={6}>{image}</Col>
      <Col lg={6}>{content}</Col>
    </>
  );

  if (isImageRight) {
    item = (
      <>
        <Col className="d-none d-lg-block" lg={6}>
          {content}
        </Col>
        <Col lg={6}>{image}</Col>
        <Col className="d-lg-none" lg={6}>
          {content}
        </Col>
      </>
    );
  }

  return (
    <Container>
      <Row className="p-2 p-sm-3 p-md-5 me-3">{item}</Row>
    </Container>
  );
};

export default DonateItem;
