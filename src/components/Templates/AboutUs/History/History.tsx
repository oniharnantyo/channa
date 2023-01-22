import Head from 'next/head';

import { Header } from '@components/Organisms/Header';
import { History as OHistory } from '@components/Organisms/History';

const History = () => {
  return (
    <>
      <Head>
        <title>Sejarah</title>
      </Head>
      <Header />
      <OHistory />
    </>
  );
};

export default History;
