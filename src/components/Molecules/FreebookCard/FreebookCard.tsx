import { StyledButton } from '@components/Atoms/StyledButton';
import ColorStyle from '@styles/Color.module.css';
import { truncate } from '@utils/text';
import clsx from 'clsx';
import { Col } from 'react-bootstrap';

import Style from './FreebookCard.module.css';
import { FreebookCardProps } from './FreebookCard.types';

const FreebookCard: FreebookCardProps = ({
  title,
  author,
  description,
  imageUrl,
  imageAlt,
  url,
}) => {
  const desc = truncate(description, 400);
  return (
    <Col md={6} className="py-4">
      <Col md={12} className={Style.card}>
        <img src={imageUrl} alt={imageAlt} className={clsx(Style.image, 'd-block', 'mx-auto')} />
        <p className={clsx(Style.title, ColorStyle.white)}>{title}</p>
        <p className={clsx(Style.author, ColorStyle.white)}>{author}</p>
        <p className={clsx(Style.description, ColorStyle.white)}>{desc}</p>
        <div className="d-flex justify-content-center">
          <StyledButton variant="light" size="lg" onClick={() => window.open(url, '_blank')}>
            Baca
          </StyledButton>
        </div>
      </Col>
    </Col>
  );
};

export default FreebookCard;
