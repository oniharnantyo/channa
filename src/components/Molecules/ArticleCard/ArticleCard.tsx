import { Label } from '@components/Atoms/Label';
import LinkImage from '@components/Atoms/LinkImage/LinkImage';
import { LinkTitle } from '@components/Atoms/LinkTitle';
import { faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import BackgroundStyle from '@styles/Background.module.css';
import ColorStyle from '@styles/Color.module.css';
import { formatDate } from '@utils/format';
import { truncate } from '@utils/text';
import clsx from 'clsx';
import { Card, Col } from 'react-bootstrap';

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
  const truncatedDescription = truncate(description || '', 100);

  return (
    <Card key={slug} className={clsx(Style.card, BackgroundStyle.white, 'h-100')}>
      <LinkImage imageUrl={imageUrl} imageAlt={imageAlt} url={url} width={'500'} height={'300'} />
      <Card.Body>
        <LinkTitle url={url} title={title} />
        <Label variant="primary" icon={faCalendarAlt} label={createdAtDate} />
        <Label variant="primary" icon={faUser} label={author} />
        {truncatedDescription && (
          <p className={clsx(Style.description, ColorStyle.primary)}>{truncatedDescription}</p>
        )}
      </Card.Body>
    </Card>
  );
};

export default ArticleCard;
