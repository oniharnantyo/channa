import Head from 'next/head';

import { Header } from '@components/Organisms/Header';
import { History as OHistory } from '@components/Organisms/History';
import { Layout } from '@components/Templates/Layout';

const History = () => {
  return (
    <Layout>
      <Head>
        <title>Sejarah</title>
      </Head>
      <Header />
      <OHistory />
    </Layout>
  );
};

export default History;
