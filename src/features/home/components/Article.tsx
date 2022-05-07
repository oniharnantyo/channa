import { Col, Container, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { SectionTitle } from '@/components/Elements';
import { ArticleCard } from '@/components/Elements/ArticleCard';

import { useArticles } from '../apis/getArticles';

export const Article = () => {
  const perPage = 3;
  const articlesQuery = useArticles({ perPage });

  const data = articlesQuery.data;

  if (!data) {
    return (
      <>
        <h2>No Data</h2>
      </>
    );
  }

  return (
    <section className="section background-blue">
      <Container>
        <SectionTitle title="Artikel Terbaru" isPrimaryColor={false}></SectionTitle>
        <Row>
          {data.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              url="test"
              imageUrl={article.imageUrl}
              imageAlt={article.imageAlt}
              createdAt={article.createdAt}
              author={article.author}
              description={article.description}
            />
          ))}
        </Row>
        <Row>
          <Col md={12} className="article-more">
            <LinkContainer to="/artikel">
              <a className="color-white float-end">Lihat artikel lainnya &gt;&gt;</a>
            </LinkContainer>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
