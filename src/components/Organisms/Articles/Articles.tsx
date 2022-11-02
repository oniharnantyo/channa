import { ArticleCard } from '@components/Molecules/ArticleCard';
import { Pagination } from '@components/Molecules/Pagination';
import { Search } from '@components/Molecules/Search';
import { IArticle } from '@domains/article';
import { getArticles } from '@services/article/getArticles';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useQuery } from 'react-query';

import { SectionNoTitle } from '../Section';

const Articles = () => {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [searchTemp, setSearchTemp] = useState('');
  const [search, setSearch] = useState('');
  const [articles, setArticles] = useState([] as IArticle[]);

  const {
    data: articlesData,
    error,
    refetch,
    isFetching,
  } = useQuery(
    ['getArticles', page, search],
    () => getArticles({ page: page, perPage: 9, search: search }),
    {
      retry: false,
    }
  );

  useEffect(() => {
    if (articlesData) {
      setArticles(articlesData?.data as IArticle[]);
      setPageCount(articlesData?.meta?.totalPages);
    }
    window.scrollTo(0, 0);
  }, [articlesData]);

  return (
    <>
      <SectionNoTitle>
        <Row>
          <Col md={4} className="ms-auto">
            <Search
              placeholder="Masukkan kata pencarian"
              onType={(e: any) => setSearchTemp(e.target.value)}
              onFinish={() => setSearch(searchTemp)}
              onEnter={() => setSearch(searchTemp)}
            />
          </Col>
        </Row>
      </SectionNoTitle>
      <SectionNoTitle>
        <Row>
          {articles &&
            articles.map((article) => (
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
      </SectionNoTitle>
      <SectionNoTitle>
        <Pagination
          pageCount={pageCount}
          onPageChange={(event) => {
            setPage(event.selected + 1);
          }}
        />
      </SectionNoTitle>
    </>
  );
};

export default Articles;
