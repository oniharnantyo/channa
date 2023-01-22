import dynamic from 'next/dynamic';
import Head from 'next/head';

import { Profile as OProfile } from '@components/Organisms/Profile';

const Header = dynamic(() => import('../../../Organisms/Header/Header'));

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
