import { FC } from 'react';

interface IContactItemProps {
  title: string;
  account: string;
  confirm: string;
  description: string;
  imageURL: string;
  imageAlt: string;
  isImageRight?: boolean;
}

export type ContactItemProps = FC<IContactItemProps>;
