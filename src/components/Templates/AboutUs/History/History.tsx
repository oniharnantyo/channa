import Head from 'next/head';

import { Header } from '@components/Organisms/Header';
import { History as OHistory } from '@components/Organisms/History';

const History = () => {
  const title = 'Sejarah - Vidyāsenā Vihāra Vidyāloka';
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Vidyāsenā dilihat dari sejarah pendiriannya mempunyai hubungan yang sangat erat dengan keberadan organisasi sebelumnya yaitu Buddha Dhamma Study Group Yogyakarta (BDSGY)."
        />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content="Vidyāsenā dilihat dari sejarah pendiriannya mempunyai hubungan yang sangat erat dengan keberadan organisasi sebelumnya yaitu Buddha Dhamma Study Group Yogyakarta (BDSGY)."
        />
        <meta property="og:type" content={title} />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/vidyasena-prod/image/upload/c_fill,g_xy_center,h_1200,w_2292,x_0,y_0/v1681801303/sekarang_hcs7fw.webp"
        />
        <meta property="og:url" content="/sejarah" />
        <meta property="twitter:title" content="Vidyāsenā Vihāra Vidyāloka" />
        <meta
          property="twitter:description"
          content="Vidyāsenā dilihat dari sejarah pendiriannya mempunyai hubungan yang sangat erat dengan keberadan organisasi sebelumnya yaitu Buddha Dhamma Study Group Yogyakarta (BDSGY)."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/vidyasena-prod/image/upload/c_fill,g_xy_center,h_1200,w_2292,x_0,y_0/v1681801303/sekarang_hcs7fw.webp"
        />
      </Head>
      <Header />
      <OHistory />
    </>
  );
};

export default History;
