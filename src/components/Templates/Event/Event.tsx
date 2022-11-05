import Head from 'next/head';

import { Events } from '@components/Organisms/Events';
import { Header } from '@components/Organisms/Header';
import { LatestEvent } from '@components/Organisms/LatestEvent';

const Event = () => {
  const title = 'Acara - Vidyāsenā Vihāra Vidyāloka';
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <LatestEvent />
      <Events />
    </>
  );
};

export default Event;
