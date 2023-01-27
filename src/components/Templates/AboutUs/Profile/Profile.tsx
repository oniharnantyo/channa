import dynamic from 'next/dynamic';
import Head from 'next/head';

import { Profile as OProfile } from '@components/Organisms/Profile';

const Header = dynamic(() => import('../../../Organisms/Header/Header'));

const Profile = () => {
  return (
    <>
      <Head>
        <title>Profil - Vidyāsenā Vihāra Vidyāloka</title>
        <meta
          name="description"
          content="Vidyāsenā merupakan salah satu organisasi mahasiswa dan pelajar Buddhis Indonesia yang berada di Vihāra Vidyāloka Yogyakarta. Vidya berarti pengetahuan Dhamma dan Sena berarti prajurit atau tentara penjaga, sehingga Vidyāsenā berarti Prajurit pengetahuan Dhamma."
        ></meta>
      </Head>
      <Header />
      <OProfile />
    </>
  );
};

export default Profile;
