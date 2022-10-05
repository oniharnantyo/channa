import { axios, axiosSSR } from 'src/lib';

import { getArticlesProps } from './getArticles.types';

export const getArticles = async ({
  page = 1,
  perPage = 10,
  search = '',
  field = 'created_at',
  direction = 'DESC',
  isSSR,
}: getArticlesProps) => {
  try {
    let response;

    const params = {
      page: page,
      perPage: perPage,
      search: search,
      field: field,
      direction: direction,
    };

    const endpoint = '/articles';
    const conf = {
      headers: { 'Content-Type': 'application/json' },
      params: params,
    };

    if (isSSR) {
      response = await axiosSSR.get(endpoint, conf);
    } else {
      response = await axios.get(endpoint, conf);
    }

    const { data } = response;

    if (data.status == '00') {
      return { data: data.data, meta: data.meta };
    } else {
      throw new Error(data.message);
    }
  } catch (error: unknown) {
    throw error;
  }
};
