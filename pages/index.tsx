import { Banner } from '@components/Organisms/Banner';
import { LatestEvent } from '@components/Organisms/LatestEvent';
import { Layout } from '@components/Templates/Layout';

export default function Home() {
  return (
    <>
      <Layout>
        <Banner />
        <LatestEvent />
      </Layout>
    </>
  );
}
