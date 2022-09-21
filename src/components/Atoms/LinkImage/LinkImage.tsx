import Image from 'next/image';
import Link from 'next/link';

import clsx from 'clsx';

import Style from './LinkImage.module.css';
import { LinkImageProps } from './LinkImage.types';

const LinkImage: LinkImageProps = ({ imageUrl, imageAlt, url, width, height }) => {
  if (imageUrl === '') {
    imageUrl = `https://placehold.jp/${width}x${height}.png?text=image`;
  }

  return (
    <div className={clsx(Style.image, 'col-12')}>
      <Link href={url}>
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={width}
          height={height}
          layout="responsive"
          objectFit="contain"
        />
      </Link>
    </div>
  );
};

export default LinkImage;
