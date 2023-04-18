import dynamic from 'next/dynamic';
import Head from 'next/head';

import { ArticleDetailProps } from './ArticleDetail.types';

const Header = dynamic(() => import('../../../Organisms/Header/Header'));
const OArticleDetail = dynamic(
  () => import('../../../Organisms/Articles/ArticleDetail/ArticleDetail')
);

const ArticleDetail: ArticleDetailProps = ({ article }) => {
  const title = article.title;
  const description = article.description;
  const image = article.imageURL;
  const slug = article.slug;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={'/article/' + slug} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
      </Head>
      <Header />
      <OArticleDetail article={article} />
    </>
  );
};

export default ArticleDetail;
