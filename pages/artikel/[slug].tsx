import { GetServerSideProps, NextPage } from 'next';

import { ArticleDetail } from '@components/Templates/Article/Detail';
import { IArticle } from '@domains/article';
import { getArticleBySlug } from '@services/article/getArticleBySlug';

type ArtikelDetailProps = {
  article: IArticle;
};

const ArtikelDetail: NextPage<ArtikelDetailProps> = (props) => {
  return <ArticleDetail article={props.article} />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = typeof ctx.params?.slug === 'string' ? ctx.params?.slug : '';

  const article = await getArticleBySlug({ slug: slug, isSSR: true });

  return {
    props: {
      article: article,
    },
  };
};

export default ArtikelDetail;
