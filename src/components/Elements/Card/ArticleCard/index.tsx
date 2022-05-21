import { faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Image } from 'react-bootstrap';

import BackgroundStyle from '@/styles/Background.module.css';
import ColorStyle from '@/styles/Color.module.css';
import { formatDate } from '@/utils/format';

import Style from './ArticleCard.module.css';

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
    <Col md={4}>
      <Col md={12} className={`${Style.card} ${BackgroundStyle.white} mb-4 mb-lg-4`}>
        <div className="article-content d-block">
          <a href={url}>
            <Image src={imageUrl} alt={imageAlt} fluid={true} />
          </a>
          <h5 className={Style.title}>
            <a href={url}>{title}</a>
          </h5>
          <p className={`${Style.createdAt} ${ColorStyle.primary}`}>
            <FontAwesomeIcon icon={faCalendarAlt} />
            {createdAtDate}
          </p>
          <p className={`${Style.author} ${ColorStyle.primary}`}>
            <FontAwesomeIcon icon={faUser} />
            {author}
          </p>
          <p className={`${Style.description} ${ColorStyle.primary}`}>{description}</p>
        </div>
      </Col>
    </Col>
  );
};
