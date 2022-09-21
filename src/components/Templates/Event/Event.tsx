import { Events } from '@components/Organisms/Events';
import { Header } from '@components/Organisms/Header';
import { LatestEvent } from '@components/Organisms/LatestEvent';

import { Layout } from '../Layout';

const Event = () => {
  return (
    <Layout>
      <Header />
      <LatestEvent />
      <Events />
    </Layout>
  );
};

export default Event;
