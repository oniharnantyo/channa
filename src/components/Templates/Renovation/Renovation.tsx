import Head from 'next/head';

import { Header } from '@components/Organisms/Header';
import { Renovation as ORenovation } from '@components/Organisms/Renovation';

const Renovation = () => {
  return (
    <>
      <Head>
        <title>Dana Renovasi - Vidyāsenā Vihāra Vidyāloka</title>
        <meta
          name="description"
          content="Renovasi tahun 2023 ini akan difokuskan pada perbaikan vihara vidyaloka terutama pada lantai 3 yang disebabkan adanya rembesan (umumnya disebut sip) dan kebocoran akibat dampak usia bangunan yang sudah tua."
        ></meta>
      </Head>
      <Header />
      <ORenovation />
    </>
  );
};

export default Renovation;
