import { Banner } from '@components/Organisms/Banner';
import { HomeArticles } from '@components/Organisms/HomeArticles';
import { HomeFreebooks } from '@components/Organisms/HomeFreebooks';
import { LatestEvent } from '@components/Organisms/LatestEvent';

import { Layout } from '../Layout';

const Home = () => {
  return (
    <Layout>
      <Banner />
      <LatestEvent />
      <HomeFreebooks />
      <HomeArticles />
    </Layout>
  );
};

export default Home;
