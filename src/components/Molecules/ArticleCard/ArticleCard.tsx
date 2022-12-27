import { ArticleLabel } from '@components/Atoms/ArticleLabel';
import LinkImage from '@components/Atoms/LinkImage/LinkImage';
import { LinkTitle } from '@components/Atoms/LinkTitle';
import { truncate } from '@utils/text';
import clsx from 'clsx';
import { Card } from 'react-bootstrap';

import Style from './ArticleCard.module.scss';
import { ArticleCardProps } from './ArticleCard.types';

const ArticleCard: ArticleCardProps = ({
  slug,
  title,
  author,
  description,
  imageUrl,
  imageAlt,
  createdAt,
  isBodyMargin,
}) => {
  const url = '/artikel/' + slug;

  return (
    <Card key={slug} className={clsx(Style.card, 'h-100', 'm-2')}>
      <LinkImage imageUrl={imageUrl} imageAlt={imageAlt} url={url} width={'500'} height={'300'} />
      <Card.Body className={clsx(Style.cardBody, { ['mx-2']: isBodyMargin })}>
        <LinkTitle url={url} title={title} variant="primary" />
        <ArticleLabel author={author} date={createdAt} />
        {description && <p className={clsx(Style.description)}>{description}</p>}
      </Card.Body>
    </Card>
  );
};

export default ArticleCard;
