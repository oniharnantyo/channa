import { faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col } from 'react-bootstrap';

import { formatDate } from '@/utils/format';

type articleCardProps = {
  title: string;
  url: string;
  imageUrl: string;
  imageAlt?: string;
  createdAt: Date;
  author: string;
  description: string;
};

export const ArticleCard = ({
  title,
  url,
  imageUrl,
  imageAlt,
  createdAt,
  author,
  description,
}: articleCardProps) => {
  const createdAtDate = formatDate(createdAt, 'DD MMMM YYYY');

  return (
    <Col md={4} lg={4}>
      <Col md={12} className="mb-4 mb-lg-4 article-card background-white">
        <div className="article-content d-block">
          <a href={url}>
            <img src={imageUrl} alt={imageAlt} className="article-image" />
          </a>
          <h5 className="article-title">
            <a href={url}>{title}</a>
          </h5>
          <p className="article-created-at color-primary">
            <FontAwesomeIcon icon={faCalendarAlt} />
            {createdAtDate}
          </p>
          <p className="article-author color-primary">
            <FontAwesomeIcon icon={faUser} />
            {author}
          </p>
          <p className="article-description color-primary">{description}</p>
        </div>
      </Col>
    </Col>
  );
};
