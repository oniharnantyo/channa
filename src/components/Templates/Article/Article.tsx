import Header from '@components/Organisms/Header/Header';
import { SectionNoTitle } from '@components/Organisms/Section';

import { Layout } from '../Layout';
import { ArticleProps } from './Article.types';

const Article: ArticleProps = ({ articles }) => {
  return (
    <Layout>
      <Header />
      <SectionNoTitle></SectionNoTitle>
    </Layout>
  );
};

export default Article;
