import Head from 'next/head';

import { Header } from '@components/Organisms/Header';
import { VisionAndMission as OVisionAndMission } from '@components/Organisms/VisionAndMission';
import { Layout } from '@components/Templates/Layout';

const VisionAndMission = () => {
  return (
    <Layout>
      <Head>
        <title>Visi dan Misi</title>
      </Head>
      <Header />
      <OVisionAndMission />
    </Layout>
  );
};

export default VisionAndMission;
