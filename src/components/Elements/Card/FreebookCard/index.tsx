import { Col } from 'react-bootstrap';

import ColorStyle from '@/styles/Color.module.css';

import { StyledButton } from '../../Button';

import Style from './FreebookCard.module.css';

export type freebookCardProps = {
  title: string;
  author: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  downloadUrl: string;
};

export const FreebookCard = ({
  title,
  author,
  description,
  imageUrl,
  imageAlt,
  downloadUrl,
}: freebookCardProps) => {
  return (
    <Col md={6} className="py-sm-4">
      <Col md={12} className={Style.card}>
        <img src={imageUrl} alt={imageAlt} className={`${Style.image} d-block mx-auto`} />
        <p className={`${Style.title} ${ColorStyle.white}`}>{title}</p>
        <p className={`${Style.author} ${ColorStyle.white}`}>{author}</p>
        <p className={`${Style.description} ${ColorStyle.white}`}>{description}</p>
        <a href={downloadUrl} className="d-flex justify-content-center">
          <StyledButton className={Style.button}>Download PDF</StyledButton>
        </a>
      </Col>
    </Col>
  );
};
