import dynamic from 'next/dynamic';
import Head from 'next/head';

const Header = dynamic(() => import('../../Organisms/Header/Header'));
const Articles = dynamic(() => import('../../Organisms/Articles/Articles'));

const Article = () => {
  const title = 'Artikel - Vidyāsenā Vihāra Vidyāloka';
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <Articles />
    </>
  );
};

export default Article;
