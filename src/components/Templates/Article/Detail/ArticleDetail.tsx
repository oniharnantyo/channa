import { ArticleDetail as OArticleDetail } from '@components/Organisms/ArticleDetail';
import { Header } from '@components/Organisms/Header';
import { Layout } from '@components/Templates/Layout';

import { ArticleDetailProps } from './ArticleDetail.types';

const ArticleDetail: ArticleDetailProps = ({ article }) => {
  return (
    <Layout>
      <Header />
      <OArticleDetail article={article} />
    </Layout>
  );
};

export default ArticleDetail;
