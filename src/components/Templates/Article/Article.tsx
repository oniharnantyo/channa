import { Articles } from '@components/Organisms/Articles';
import Header from '@components/Organisms/Header/Header';

import { Layout } from '../Layout';

const Article = () => {
  return (
    <Layout>
      <Header />
      <Articles />
    </Layout>
  );
};

export default Article;
