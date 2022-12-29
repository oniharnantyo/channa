import Image from 'next/image';

import { LogoImageProps } from './LogoImage.types';

const LogoImage: LogoImageProps = ({ logo, alt, width, height, className }) => {
  return (
    <Image
      src={logo}
      alt={alt}
      height={height}
      width={width}
      objectFit="contain"
      className={className}
    />
  );
};

export default LogoImage;
