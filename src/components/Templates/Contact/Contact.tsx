import { Contacts } from '@components/Organisms/Contacts';
import { Header } from '@components/Organisms/Header';

import { Layout } from '../Layout';
import { ContactProps } from './Contact.types';

const Contact: ContactProps = ({
  OperationalAccount,
  OperationalConfirm,
  DAAAccount,
  DAAConfirm,
  FreebookAccount,
  FreebookConfirm,
}) => {
  return (
    <Layout>
      <Header />
      <Contacts />
    </Layout>
  );
};

export default Contact;
