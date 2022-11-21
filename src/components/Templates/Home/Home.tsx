import Head from 'next/head';

import { Banner } from '@components/Organisms/Banner';
import { LatestEvent } from '@components/Organisms/Events/LatestEvent';
import { HomeArticles } from '@components/Organisms/HomeArticles';
import { HomeDonate } from '@components/Organisms/HomeDonate';
import { HomeFreebooks } from '@components/Organisms/HomeFreebooks';
import { Programs } from '@components/Organisms/Programs';

import { HomeProps } from './Home.types';

const Home: HomeProps = ({ articles, freebooks }) => {
  const title = 'Beranda - Vidyāsenā Vihāra Vidyāloka';
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Banner />
      <LatestEvent />
      <Programs />
      <HomeFreebooks freebooks={freebooks} />
      <HomeDonate />
      <HomeArticles articles={articles} />
    </>
  );
};

export default Home;
