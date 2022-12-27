// import { History as OHistory } from '@components/Organisms/History';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import { Header } from '@components/Organisms/Header';

const OHistory = dynamic(() => import('../../../Organisms/History/History'), { ssr: false });

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
