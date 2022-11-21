import Head from 'next/head';

import { ArticleDetail as OArticleDetail } from '@components/Organisms/Articles/ArticleDetail';
import { Header } from '@components/Organisms/Header';

import { ArticleDetailProps } from './ArticleDetail.types';

const ArticleDetail: ArticleDetailProps = ({ article }) => {
  return (
    <>
      <Head>
        <title>{article.title}</title>
        <meta name="description" content={article.description}></meta>
      </Head>
      <Header />
      <OArticleDetail article={article} />
    </>
  );
};

export default ArticleDetail;
