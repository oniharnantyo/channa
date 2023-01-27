import Head from 'next/head';

import { Donates } from '@components/Organisms/Donates';
import { Header } from '@components/Organisms/Header';

const Donate = () => {
  const title = 'Dana - Vidyāsenā Vihāra Vidyāloka';
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Berdana yang benar dapat membawa pada kebebasan dari penderitaan. Berdana dengan tujuan melatih diri untuk melepas, tidak mengharapkan imbalan, buah karma, pahala, balasan, dan sebagainya."
        ></meta>
      </Head>
      <Header />
      <Donates />
    </>
  );
};

export default Donate;
