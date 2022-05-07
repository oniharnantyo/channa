import { useQuery } from 'react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';

import { Article } from '../types';

export const getArticles = ({ perPage }: { perPage: number }): Promise<Article[]> => {
  return axios
    .get('/articles', {
      params: {
        perPage,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error;
    });
};

type QueryFnType = typeof getArticles;

type UseArticlesOptions = {
  perPage: number;
  config?: QueryConfig<QueryFnType>;
};

export const useArticles = ({ perPage, config }: UseArticlesOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['articles', perPage],
    queryFn: () => getArticles({ perPage }),
    ...config,
  });
};
