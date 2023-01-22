import { FC } from 'react';

interface ILinkImageProps {
  imageUrl: string;
  imageAlt: string;
  url: string;
  width: string;
  height: string;
  isBlankTarget?: boolean;
}

export type LinkImageProps = FC<ILinkImageProps>;
