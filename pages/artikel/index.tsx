import Article from '@components/Templates/Article/Article';
import { IArticle } from '@domains/article';
import { getArticles } from '@services/article/getArticles';
import { useQuery } from 'react-query';

export default function Artikel() {
  const {
    data: articles,
    error,
    refetch,
    isFetching,
  } = useQuery(['getArticles'], () => getArticles({ page: 1, perPage: 9 }), {
    retry: false,
  });

  return (
    <>
      <Article articles={articles as IArticle[]}></Article>
    </>
  );
}
