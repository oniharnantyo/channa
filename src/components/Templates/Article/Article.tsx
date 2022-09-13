import { Articles } from '@components/Organisms/Articles';
import Header from '@components/Organisms/Header/Header';

import { Layout } from '../Layout';
import { ArticleProps } from './Article.types';

const Article: ArticleProps = ({ articles }) => {
  return (
    <Layout>
      <Header />
      <Articles />
    </Layout>
  );
};

export default Article;
