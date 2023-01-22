import dynamic from 'next/dynamic';
import Head from 'next/head';

const LatestEvent = dynamic(() => import('../../Organisms/Events/LatestEvent/LatestEvent'));
const Header = dynamic(() => import('../../Organisms/Header/Header'));
const Events = dynamic(() => import('../../Organisms/Events/Events'));

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
