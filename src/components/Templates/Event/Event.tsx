import Head from 'next/head';

import { Events } from '@components/Organisms/Events';
import { LatestEvent } from '@components/Organisms/Events/LatestEvent';
import { Header } from '@components/Organisms/Header';

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
