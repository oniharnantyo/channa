import { ArticleCard } from '@components/Molecules/ArticleCard';
import { getArticles } from '@services/article/getArticles';
import { Row } from 'react-bootstrap';
import { useQuery } from 'react-query';

import { MoreableSection } from '../Section';

const HomeArticles = () => {
  const {
    data: articlesData,
    error,
    refetch,
    isFetching,
  } = useQuery(['getArticles'], () => getArticles({ page: 1, perPage: 3 }), {
    retry: false,
  });

  return (
    <MoreableSection
      title={'Artikel'}
      variant={'primary'}
      linkTitle={'Lihat artikel lainnya >>'}
      link={'/artikel'}
    >
      <Row>
        {articlesData?.map((article) => (
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
    </MoreableSection>
  );
};

export default HomeArticles;
