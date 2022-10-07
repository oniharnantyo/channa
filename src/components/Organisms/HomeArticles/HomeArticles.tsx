import { ArticleCard } from '@components/Molecules/ArticleCard';
import { Col, Row } from 'react-bootstrap';

import { MoreableSection } from '../Section';
import { HomeArticlesProps } from './HomeArticles.types';

const HomeArticles: HomeArticlesProps = ({ articles }) => {
  return (
    <MoreableSection
      title={'Artikel'}
      variant={'primary'}
      linkTitle={'Lihat artikel lainnya >>'}
      link={'/artikel'}
    >
      <Row>
        {articles.map((article) => (
          <Col key={article.id} md={4} className="mb-4">
            <ArticleCard
              key={article.id}
              title={article.title}
              slug={article.slug}
              imageUrl={article.thumbnailURL || ''}
              imageAlt={article.imageDescription}
              createdAt={article.createdAt}
              author={article.author}
              description={article.description}
              isBodyMargin={true}
            />
          </Col>
        ))}
      </Row>
    </MoreableSection>
  );
};

export default HomeArticles;
