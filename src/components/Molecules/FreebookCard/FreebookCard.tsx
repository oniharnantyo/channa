import Image from 'next/image';

import { LinkImage } from '@components/Atoms/LinkImage';
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
      <LinkImage
        imageUrl={imageUrl}
        imageAlt={imageAlt}
        url={url}
        width="300"
        height="400"
        isBlankTarget
      />
      <Card.Body>
        <LinkTitle
          url={url}
          title={title}
          variant={variant === 'primary' ? 'white' : 'primary'}
          isBlankTarget={true}
        />
        <span
          className={clsx(
            Style.author,
            { ['text-light']: variant === 'primary' },
            { ['text-dark']: variant === 'white' }
          )}
        >
          {author}
        </span>
      </Card.Body>
    </Card>
  );
};

export default FreebookCard;
