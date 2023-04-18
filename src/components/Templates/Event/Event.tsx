import dynamic from 'next/dynamic';
import Head from 'next/head';

const LatestEvent = dynamic(() => import('../../Organisms/Events/LatestEvent/LatestEvent'));
const Header = dynamic(() => import('../../Organisms/Header/Header'));
const Events = dynamic(() => import('../../Organisms/Events/Events'));

const Event = () => {
  const title = 'Acara - Vidyāsenā Vihāra Vidyāloka';
  const description =
    'Vidyāsenā merupakan salah satu organisasi mahasiswa dan pelajar Buddhis Indonesia yang berada di Vihāra Vidyāloka Yogyakarta. Vidya berarti pengetahuan Dhamma dan Sena berarti prajurit atau tentara penjaga, sehingga Vidyāsenā berarti Prajurit pengetahuan Dhamma.';
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
        <meta property="og:url" content="/acara" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/vidyasena-prod/image/upload/c_fill,g_xy_center,h_1200,w_2292,x_0,y_0/v1681801303/sekarang_hcs7fw.webp"
        />
      </Head>
      <Header />
      <LatestEvent />
      <Events />
    </>
  );
};

export default Event;
