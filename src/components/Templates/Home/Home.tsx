import { Banner } from '@components/Organisms/Banner';
import { HomeArticles } from '@components/Organisms/HomeArticles';
import { LatestEvent } from '@components/Organisms/LatestEvent';

import { Layout } from '../Layout';
import { HomeProps } from './Home.types';

const Home: HomeProps = ({}) => {
  return (
    <Layout>
      <Banner />
      <LatestEvent />
      <HomeArticles />
    </Layout>
  );
};

export default Home
