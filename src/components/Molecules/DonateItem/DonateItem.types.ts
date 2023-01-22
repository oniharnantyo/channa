import { FC } from 'react';

interface IDonateItemProps {
  title: string;
  account: string;
  confirm: string;
  description: string;
  imageURL: string;
  imageAlt: string;
  isImageRight?: boolean;
  confirmUrl: string;
}

export type DonateItemProps = FC<IDonateItemProps>;
