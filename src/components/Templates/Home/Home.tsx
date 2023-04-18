import dynamic from 'next/dynamic';
import Head from 'next/head';

import { HomeProps } from './Home.types';

const Hero = dynamic(() => import('../../Organisms/Hero/Hero'));
const LatestEvent = dynamic(() => import('../../Organisms/Events/LatestEvent/LatestEvent'), {
  ssr: false,
});
const Programs = dynamic(() => import('../../Organisms/Programs/Programs'), { ssr: false });
const Freebooks = dynamic(() => import('../../Organisms/HomeFreebooks/HomeFreebooks'), {
  ssr: false,
});
const Donate = dynamic(() => import('../../Organisms/HomeDonate/HomeDonate'), { ssr: false });
const Articles = dynamic(() => import('../../Organisms/HomeArticles/HomeArticles'), { ssr: false });

const Home: HomeProps = ({ articles, freebooks }) => {
  const title = 'Beranda - Vidyāsenā Vihāra Vidyāloka';
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Vidyāsenā merupakan organisasi mahasiswa dan pelajar Buddhis Indonesia di Vihāra Vidyāloka Yogyakarta. Vidyāsenā berarti Prajurit pengetahuan Dhamma."
        />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content="Vidyāsenā merupakan organisasi mahasiswa dan pelajar Buddhis Indonesia di Vihāra Vidyāloka Yogyakarta. Vidyāsenā berarti Prajurit pengetahuan Dhamma."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/vidyasena-prod/image/upload/c_fill,g_xy_center,h_1200,w_2292,x_0,y_0/v1681801303/sekarang_hcs7fw.webp"
        />
        <meta property="og:url" content="/" />
        <meta property="twitter:title" content={title} />
        <meta
          property="twitter:description"
          content="Vidyāsenā merupakan organisasi mahasiswa dan pelajar Buddhis Indonesia di Vihāra Vidyāloka Yogyakarta. Vidyāsenā berarti Prajurit pengetahuan Dhamma."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/vidyasena-prod/image/upload/c_fill,g_xy_center,h_1200,w_2292,x_0,y_0/v1681801303/sekarang_hcs7fw.webp"
        />
      </Head>
      <Hero />
      <LatestEvent />
      <Programs />
      <Freebooks freebooks={freebooks} />
      <Donate />
      <Articles articles={articles} />
    </>
  );
};

export default Home;
