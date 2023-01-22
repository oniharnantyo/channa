import dynamic from 'next/dynamic';
import Head from 'next/head';

import { ArticleDetailProps } from './ArticleDetail.types';

const Header = dynamic(() => import('../../../Organisms/Header/Header'));
const OArticleDetail = dynamic(
  () => import('../../../Organisms/Articles/ArticleDetail/ArticleDetail')
);

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
