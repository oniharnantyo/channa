import { ArticleCard } from '@components/Molecules/ArticleCard';
import { Pagination } from '@components/Molecules/Pagination';
import { IArticle } from '@domains/article';
import { getArticles } from '@services/article/getArticles';
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useQuery } from 'react-query';

import { SectionNoTitle } from '../Section';

const Articles = () => {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [articles, setArticles] = useState([] as IArticle[]);

  const {
    data: articlesData,
    error,
    refetch,
    isFetching,
  } = useQuery(['getArticles', page], () => getArticles({ page: page, perPage: 9 }), {
    retry: false,
  });

  useEffect(() => {
    if (articlesData) {
      setArticles(articlesData?.data as IArticle[]);
      setPageCount(articlesData?.meta?.totalPages);
    }
    window.scrollTo(0, 0);
  }, [articlesData]);

  return (
    <>
      <SectionNoTitle variant={'white'}>
        <Row>
          {articles &&
            articles.map((article) => (
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