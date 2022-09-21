import { FC } from 'react';

interface ILinkImageProps {
  imageUrl: string;
  imageAlt: string;
  url: string;
  width: string;
  height: string;
}

export type LinkImageProps = FC<ILinkImageProps>;
