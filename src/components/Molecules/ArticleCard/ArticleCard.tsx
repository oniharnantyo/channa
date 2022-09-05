import { Label } from '@components/Atoms/Label';
import LinkImage from '@components/Atoms/LinkImage/LinkImage';
import { LinkTitle } from '@components/Atoms/LinkTitle';
import { faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import BackgroundStyle from '@styles/Background.module.css';
import ColorStyle from '@styles/Color.module.css';
import { formatDate } from '@utils/format';
import { truncate } from '@utils/text';
import clsx from 'clsx';
import { Col } from 'react-bootstrap';

import Style from './ArticleCard.module.css';
import { ArticleCardProps } from './ArticleCard.types';

const ArticleCard: ArticleCardProps = ({
  slug,
  title,
  author,
  description,
  imageUrl,
  imageAlt,
  createdAt,
}) => {
  const createdAtDate = formatDate(createdAt, 'DD MMMM YYYY');
  const url = '/artikel/' + slug;
  const desc = truncate(description, 100);

  return (
    <Col md={4} key={slug}>
      <Col md={12} className={clsx(Style.card, BackgroundStyle.white, 'mb-4', 'mb-lg-4')}>
        <div className="d-block">
          <LinkImage imageUrl={imageUrl} imageAlt={imageAlt} url={url} />
          <LinkTitle url={url} title={title} />
          <Label variant="primary" icon={faCalendarAlt} label={createdAtDate} />
          <Label variant="primary" icon={faUser} label={author} />
          <p className={clsx(Style.description, ColorStyle.primary)}>{desc}</p>
        </div>
      </Col>
    </Col>
  );
};

export default ArticleCard;
