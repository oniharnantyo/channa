import { FC } from 'react';

interface IContactProps {
  operationalAccount: string;
  operationalConfirm: string;
  daaAccount: string;
  daaConfirm: string;
  freebookAccount: string;
  freebookConfirm: string;
}

export type ContactProps = FC<IContactProps>;
