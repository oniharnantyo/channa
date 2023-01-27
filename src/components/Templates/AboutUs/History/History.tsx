import Head from 'next/head';

import { Header } from '@components/Organisms/Header';
import { History as OHistory } from '@components/Organisms/History';

const History = () => {
  return (
    <>
      <Head>
        <title>Sejarah - Vidyāsenā Vihāra Vidyāloka</title>
        <meta
          name="description"
          content="Vidyāsenā dilihat dari sejarah pendiriannya mempunyai hubungan yang sangat erat dengan keberadan organisasi sebelumnya yaitu Buddha Dhamma Study Group Yogyakarta (BDSGY)."
        ></meta>
      </Head>
      <Header />
      <OHistory />
    </>
  );
};

export default History;
