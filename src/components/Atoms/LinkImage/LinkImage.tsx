import Link from 'next/link';

import clsx from 'clsx';
import { Image } from 'react-bootstrap';

import Style from './LinkImage.module.css';
import { LinkImageProps } from './LinkImage.types';

const LinkImage: LinkImageProps = ({ imageUrl, imageAlt, url }) => {
  if (imageUrl === '') {
    imageUrl = 'https://placehold.jp/500x300.png?text=image';
  }

  return (
    <div className={clsx(Style.image, 'col-12')}>
      <Link href={url}>
        <Image src={imageUrl} alt={imageAlt} fluid={true} />
      </Link>
    </div>
  );
};

export default LinkImage;
