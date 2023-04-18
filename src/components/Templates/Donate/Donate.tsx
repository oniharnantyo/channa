import Head from 'next/head';

import { Donates } from '@components/Organisms/Donates';
import { Header } from '@components/Organisms/Header';

const Donate = () => {
  const title = 'Dana - Vidyāsenā Vihāra Vidyāloka';
  const description =
    'Berdana yang benar dapat membawa pada kebebasan dari penderitaan. Berdana dengan tujuan melatih diri untuk melepas, tidak mengharapkan imbalan, buah karma, pahala, balasan, dan sebagainya.';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/vidyasena-prod/image/upload/c_fill,g_xy_center,h_1200,w_2292,x_0,y_0/v1681801303/sekarang_hcs7fw.webp"
        />
        <meta property="og:url" content="/artikel" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/vidyasena-prod/image/upload/c_fill,g_xy_center,h_1200,w_2292,x_0,y_0/v1681801303/sekarang_hcs7fw.webp"
        />
      </Head>
      <Header />
      <Donates />
    </>
  );
};

export default Donate;
