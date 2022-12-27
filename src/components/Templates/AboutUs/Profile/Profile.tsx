import dynamic from 'next/dynamic';
import Head from 'next/head';

import { Header } from '@components/Organisms/Header';

const OProfile = dynamic(() => import('../../../Organisms/Profile/Profile'), { ssr: false });

const Profile = () => {
  return (
    <>
      <Head>
        <title>Profil</title>
      </Head>
      <Header />
      <OProfile />
    </>
  );
};

export default Profile;
