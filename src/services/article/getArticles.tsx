import { IArticle } from '@domains/article';
import { axios } from 'src/lib';

import { getArticlesProps } from './getArticles.types';

export const getArticles = async ({
  page = 1,
  perPage = 10,
  search = '',
  field = 'created_at',
  direction = 'ASC',
}: getArticlesProps) => {
  try {
    const params = {
      page: page,
      perPage: perPage,
      search: search,
      field: field,
      direction: direction,
    };

    const { data } = await axios.get('/articles', {
      headers: { 'Content-Type': 'application/json' },
      params: params,
    });

    if (data.status == '00') {
      return data.data as Array<IArticle>;
    } else {
      throw new Error(data.message);
    }
  } catch (error: unknown) {
    throw error;
  }
};
