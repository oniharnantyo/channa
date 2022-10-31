import Head from 'next/head';

import { Donates } from '@components/Organisms/Donates';
import { Header } from '@components/Organisms/Header';

import { Layout } from '../Layout';

const Donate = () => {
  const title = 'Dana - Vidyāsenā Vihāra Vidyāloka';
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <Donates />
    </Layout>
  );
};

export default Donate;
