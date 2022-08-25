import Image from 'next/image';

import { LogoImageProps } from './LogoImage.types';

const LogoImage: LogoImageProps = ({ logo, alt, className }) => {
  return <Image src={logo} alt={alt} className={className} />;
};

export default LogoImage;
