import Head from 'next/head';

import Header from '@components/Organisms/Header/Header';

import Freebooks from '../../Organisms/Freebooks/Freebooks';

const Freebook = () => {
  const title = 'Freebook - Vidyāsenā Vihāra Vidyāloka';
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <Freebooks />
    </>
  );
};

export default Freebook;
