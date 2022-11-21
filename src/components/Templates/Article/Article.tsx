import Head from 'next/head';

import Header from '@components/Organisms/Header/Header';

import Articles from '../../Organisms/Articles/Articles';

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
