import Head from 'next/head';

import { Banner } from '@components/Organisms/Banner';
import { HomeArticles } from '@components/Organisms/HomeArticles';
import { HomeDonate } from '@components/Organisms/HomeDonate';
import { HomeFreebooks } from '@components/Organisms/HomeFreebooks';
import { LatestEvent } from '@components/Organisms/LatestEvent';
import { Programs } from '@components/Organisms/Programs';

import { Layout } from '../Layout';
import { HomeProps } from './Home.types';

const Home: HomeProps = ({ articles, freebooks }) => {
  const title = 'Beranda - Vidyāsenā Vihāra Vidyāloka';
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Banner />
      <LatestEvent />
      <Programs />
      <HomeFreebooks freebooks={freebooks} />
      <HomeDonate />
      <HomeArticles articles={articles} />
    </Layout>
  );
};

export default Home;
