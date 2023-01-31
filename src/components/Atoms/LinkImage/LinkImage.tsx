import Image from 'next/image';
import Link from 'next/link';

import clsx from 'clsx';
import { useState } from 'react';

import Style from './LinkImage.module.css';
import { LinkImageProps } from './LinkImage.types';

const LinkImage: LinkImageProps = ({ imageUrl, imageAlt, url, width, height, isBlankTarget }) => {
  const [isLoading, setLoading] = useState(true);

  if (imageUrl === '') {
    imageUrl = `https://placehold.jp/${width}x${height}.png?text=image`;
  }

  const image = (
    <Image
      src={imageUrl}
      alt={imageAlt}
      width={width}
      height={height}
      layout="responsive"
      objectFit="cover"
      onLoadingComplete={() => setLoading(false)}
      className={clsx({ ['placeholder bg-muted placeholder-glow']: isLoading })}
    />
  );

  return (
    <div className={clsx(Style.image, 'col-12')}>
      {isBlankTarget ? (
        <a href={url} target={isBlankTarget ? '_blank' : ''}>
          {image}
        </a>
      ) : (
        <Link href={url} passHref>
          <a>{image}</a>
        </Link>
      )}
    </div>
  );
};

export default LinkImage;
