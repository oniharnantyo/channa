import { GetServerSideProps, NextPage } from 'next';

import { Home as Thome } from '@components/Templates/Home';
import { IArticle } from '@domains/article';
import { IFreebook } from '@domains/freebook';
import { getArticles } from '@services/article/getArticles';
import { getFreebooks } from '@services/freebook/getFreebooks';

type HomeProps = {
  articles: IArticle[];
  freebooks: IFreebook[];
};

const Home: NextPage<HomeProps> = (props) => {
  return (
    <>
      <Thome articles={props.articles} freebooks={props.freebooks} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const articles = await getArticles({ perPage: 3, isSSR: true });
  const freebooks = await getFreebooks({ perPage: 2, isSSR: true });

  return {
    props: {
      articles: articles.data,
      freebooks: freebooks.data,
    },
  };
};

export default Home;
