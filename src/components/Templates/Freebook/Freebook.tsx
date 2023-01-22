import dynamic from 'next/dynamic';
import Head from 'next/head';

const Header = dynamic(() => import('../../Organisms/Header/Header'));
const Freebooks = dynamic(() => import('../../Organisms/Freebooks/Freebooks'));

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
