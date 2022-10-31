import Head from 'next/head';

import { Contacts } from '@components/Organisms/Contacts';
import { Header } from '@components/Organisms/Header';

import { Layout } from '../Layout';
import { ContactProps } from './Contact.types';

const Contact: ContactProps = ({
  operationalAccount,
  operationalConfirm,
  daaAccount,
  daaConfirm,
  freebookAccount,
  freebookConfirm,
}) => {
  const title = 'Dana - Vidyāsenā Vihāra Vidyāloka';
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <Contacts />
    </Layout>
  );
};

export default Contact;
