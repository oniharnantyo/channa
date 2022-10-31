import Head from 'next/head';

import { Articles } from '@components/Organisms/Articles';
import Header from '@components/Organisms/Header/Header';

import { Layout } from '../Layout';

const Article = () => {
  const title = 'Artikel - Vidyāsenā Vihāra Vidyāloka';
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <Articles />
    </Layout>
  );
};

export default Article;
