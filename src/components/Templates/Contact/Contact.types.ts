import { FC } from 'react';

interface IContactProps {
  OperationalAccount: string;
  OperationalConfirm: string;
  DAAAccount: string;
  DAAConfirm: string;
  FreebookAccount: string;
  FreebookConfirm: string;
}

export type ContactProps = FC<IContactProps>;
