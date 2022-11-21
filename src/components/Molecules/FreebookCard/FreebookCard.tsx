import Image from 'next/image';

import { LinkTitle } from '@components/Atoms/LinkTitle';
import clsx from 'clsx';
import { Card } from 'react-bootstrap';

import Style from './FreebookCard.module.scss';
import { FreebookCardProps } from './FreebookCard.types';

const FreebookCard: FreebookCardProps = ({
  title,
  author,
  description,
  imageUrl,
  imageAlt,
  url,
  variant = 'primary',
}) => {
  return (
    <Card className={clsx(Style.card, 'text-center')}>
      <Image
        src={imageUrl}
        alt={imageAlt}
        width={3}
        height={4}
        layout="responsive"
        objectFit="contain"
      />
      <Card.Body>
        <span
          className={clsx(
            Style.author,
            { [variant === 'primary']: 'text-light' },
            { [variant === 'white']: 'text-dark' }
          )}
        >
          {author}
        </span>
        <LinkTitle
          url={url}
          title={title}
          variant={variant === 'primary' ? 'white' : 'primary'}
          isBlankTarget={true}
        />
      </Card.Body>
    </Card>
  );
};

export default FreebookCard;
