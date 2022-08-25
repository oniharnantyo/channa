import { FC } from 'react';

interface ILogoImageProps {
  logo: string;
  alt?: string;
  className?: string;
}

export type LogoImageProps = FC<ILogoImageProps>;
