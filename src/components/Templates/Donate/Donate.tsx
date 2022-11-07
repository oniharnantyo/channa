import Head from 'next/head';

import { Donates } from '@components/Organisms/Donates';
import { Header } from '@components/Organisms/Header';

const Donate = () => {
  const title = 'Dana - Vidyāsenā Vihāra Vidyāloka';
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <Donates />
    </>
  );
};

export default Donate;
