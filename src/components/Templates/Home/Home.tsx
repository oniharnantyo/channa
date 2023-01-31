import dynamic from 'next/dynamic';
import Head from 'next/head';

import { HomeProps } from './Home.types';

const Hero = dynamic(() => import('../../Organisms/Hero/Hero'));
const Programs = dynamic(() => import('../../Organisms/Programs/Programs'), { ssr: false });
const Freebooks = dynamic(() => import('../../Organisms/HomeFreebooks/HomeFreebooks'), {
  ssr: false,
});
const Donate = dynamic(() => import('../../Organisms/HomeDonate/HomeDonate'), { ssr: false });
const Articles = dynamic(() => import('../../Organisms/HomeArticles/HomeArticles'), { ssr: false });
const LatestEvent = dynamic(() => import('../../Organisms/Events/LatestEvent/LatestEvent'), {
  ssr: false,
});

const Home: HomeProps = ({ articles, freebooks }) => {
  const title = 'Beranda - Vidyāsenā Vihāra Vidyāloka';
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Hero />
      <LatestEvent />
      <Programs />
      <Freebooks freebooks={freebooks} />
      <Donate />
      <Articles articles={articles} />
    </>
  );
};

export default Home;
