import Head from 'next/head';

import { ArticleDetail as OArticleDetail } from '@components/Organisms/ArticleDetail';
import { Header } from '@components/Organisms/Header';
import { Layout } from '@components/Templates/Layout';

import { ArticleDetailProps } from './ArticleDetail.types';

const ArticleDetail: ArticleDetailProps = ({ article }) => {
  return (
    <Layout>
      <Head>
        <title>{article.title}</title>
        <meta name="description" content={article.description}></meta>
      </Head>
      <Header />
      <OArticleDetail article={article} />
    </Layout>
  );
};

export default ArticleDetail;
