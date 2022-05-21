import { Col, Container, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { SectionTitle } from '@/components/Elements';
import { ArticleCard } from '@/components/Elements/Card/ArticleCard';
import BackgroundStyle from '@/styles/Background.module.css';
import ColorStyle from '@/styles/Color.module.css';
import SectionStyle from '@/styles/Section.module.css';

import { useArticles } from '../../apis/getArticles';

import Style from './Article.module.css';

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
    <section className={`${SectionStyle.section} ${BackgroundStyle.blue}`}>
      <Container>
        <SectionTitle isPrimaryColor={false}>Artikel Terbaru</SectionTitle>
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
          <Col md={12} className={Style.more}>
            <LinkContainer to="/artikel">
              <a className={`${ColorStyle.white} float-end`}>Lihat artikel lainnya &gt;&gt;</a>
            </LinkContainer>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
