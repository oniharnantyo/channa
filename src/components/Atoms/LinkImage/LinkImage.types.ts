import { FC } from 'react';

interface ILinkImageProps {
  imageUrl: string;
  imageAlt: string;
  url: string;
}

export type LinkImageProps = FC<ILinkImageProps>;
