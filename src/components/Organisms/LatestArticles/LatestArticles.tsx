import { Label } from '@components/Atoms/Label';
import { ArticleCard } from '@components/Molecules/ArticleCard';
import { IArticle } from '@domains/article';
import { getArticles } from '@services/article/getArticles';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useQuery } from 'react-query';

const LatestArticles = () => {
  const [articles, setArticles] = useState([] as IArticle[]);

  const {
    data: articlesData,
    error,
    refetch,
    isFetching,
  } = useQuery(['getArticles'], () => getArticles({ page: 1, perPage: 2 }), {
    retry: false,
  });

  useEffect(() => {
    if (articlesData) {
      setArticles(articlesData?.data as IArticle[]);
    }
  }, [articlesData]);

  return (
    <Row>
      <div className="pl-5 mb-2">
        <Label variant="primary" size="lg" label="Artikel Terbaru" />
      </div>
      {articles &&
        articles.map((article) => (
          <Col key={article.id} sm={6} md={6} lg={12} className="mb-4">
            <ArticleCard
              key={article.id}
              title={article.title}
              slug={article.slug}
              imageUrl={article.thumbnailURL || ''}
              imageAlt={article.imageDescription}
              createdAt={article.createdAt}
              author={article.author}
            />
          </Col>
        ))}
    </Row>
  );
};

export default LatestArticles;
