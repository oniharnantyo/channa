import Link from 'next/link';

import clsx from 'clsx';

import Style from './LinkTitle.module.css';
import { LinkTitleProps } from './LinkTitle.types';

const LinkTitle: LinkTitleProps = ({ url, title, isBlankTarget, variant = 'primary' }) => {
  return (
    <h3
      className={clsx(
        Style.title,
        { [Style.primary]: variant === 'primary' },
        { [Style.white]: variant === 'white' }
      )}
    >
      {isBlankTarget ? (
        <a href={url} target={isBlankTarget ? '_blank' : ''}>
          {title}
        </a>
      ) : (
        <Link href={url} target={isBlankTarget ? '_blank' : ''} passHref>
          {title}
        </Link>
      )}
    </h3>
  );
};

export default LinkTitle;
