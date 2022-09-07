import { Banner } from '@components/Organisms/Banner';
import { HomeArticles } from '@components/Organisms/HomeArticles';
import { HomeFreebooks } from '@components/Organisms/HomeFreebooks';
import { LatestEvent } from '@components/Organisms/LatestEvent';
import { Programs } from '@components/Organisms/Programs';

import { Layout } from '../Layout';

const Home = () => {
  return (
    <Layout>
      <Banner />
      <LatestEvent />
      <Programs />
      <HomeFreebooks />
      <HomeArticles />
    </Layout>
  );
};

export default Home;
