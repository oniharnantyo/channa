import { ArticleCard } from '@components/Molecules/ArticleCard';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import sal from 'sal.js';

import { MoreableSection } from '../Section';
import { HomeArticlesProps } from './HomeArticles.types';

const HomeArticles: HomeArticlesProps = ({ articles }) => {
  useEffect(() => {
    sal();
  }, []);

  return (
    <MoreableSection
      title={'Artikel'}
      variant={'primary'}
      linkTitle={'Lihat artikel lainnya >>'}
      link={'/artikel'}
    >
      <Row className="px-3 px-md-0">
        {articles.map((article, i) => (
          <div
            key={article.id}
            className="col-md-4 mb-4"
            data-sal="slide-right"
            data-sal-delay={i + 1 * 100}
            data-sal-duration={700}
            data-sal-easing="ease-in-out-quad"
          >
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
          </div>
        ))}
      </Row>
    </MoreableSection>
  );
};

export default HomeArticles;
