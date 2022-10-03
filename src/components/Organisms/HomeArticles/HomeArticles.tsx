import { ArticleCard } from '@components/Molecules/ArticleCard';
import { IArticle } from '@domains/article';
import { getArticles } from '@services/article/getArticles';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useQuery } from 'react-query';

import { MoreableSection } from '../Section';

const HomeArticles = () => {
  const [articles, setArticles] = useState([] as IArticle[]);

  const {
    data: articlesData,
    error,
    refetch,
    isFetching,
  } = useQuery(['getArticles'], () => getArticles({ page: 1, perPage: 3 }), {
    retry: false,
  });

  useEffect(() => {
    if (articlesData?.data) {
      setArticles(articlesData?.data as IArticle[]);
    }
  }, [articlesData]);

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
            />
          </Col>
        ))}
      </Row>
    </MoreableSection>
  );
};

export default HomeArticles;
