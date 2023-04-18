import Head from 'next/head';

import { Header } from '@components/Organisms/Header';
import { Renovation as ORenovation } from '@components/Organisms/Renovation';

const Renovation = () => {
  const title = 'Dana Renovasi - Vidyāsenā Vihāra Vidyāloka';
  const description =
    'Renovasi tahun 2023 ini akan difokuskan pada perbaikan vihara vidyaloka terutama pada lantai 3 yang disebabkan adanya rembesan (umumnya disebut sip) dan kebocoran akibat dampak usia bangunan yang sudah tua.';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="description"
          content="Vidyāsenā merupakan organisasi mahasiswa dan pelajar Buddhis Indonesia di Vihāra Vidyāloka Yogyakarta. Vidyāsenā berarti Prajurit pengetahuan Dhamma."
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/vidyasena-prod/image/upload/c_fill,g_xy_center,h_1200,w_2292,x_0,y_0/v1681801303/sekarang_hcs7fw.webp"
        />
        <meta property="og:url" content="/dana-renovasi" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/vidyasena-prod/image/upload/c_fill,g_xy_center,h_1200,w_2292,x_0,y_0/v1681801303/sekarang_hcs7fw.webp"
        />
      </Head>
      <Header />
      <ORenovation />
    </>
  );
};

export default Renovation;
