import Head from 'next/head';

import { Events } from '@components/Organisms/Events';
import { Header } from '@components/Organisms/Header';
import { LatestEvent } from '@components/Organisms/LatestEvent';

import { Layout } from '../Layout';

const Event = () => {
  const title = 'Acara - Vidyāsenā Vihāra Vidyāloka';
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <LatestEvent />
      <Events />
    </Layout>
  );
};

export default Event;
