import { FC } from 'react';

interface ILogoImageProps {
  logo: string;
  alt?: string;
  height: number;
  width: number;
  className?: string;
}

export type LogoImageProps = FC<ILogoImageProps>;
