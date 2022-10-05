import { IArticle } from '@domains/article';
import { axios, axiosSSR } from '@lib/index';

import { getArticleBySlugProps } from './getArticleBySlug.types';

export const getArticleBySlug = async ({ slug, isSSR }: getArticleBySlugProps) => {
  try {
    let response;

    const endpoint = `/articles/slugs/` + slug;
    const conf = {
      headers: { 'Content-Type': 'application/json' },
    };

    if (isSSR) {
      response = await axiosSSR.get(endpoint, conf);
    } else {
      response = await axios.get(endpoint, conf);
    }

    const { data } = response;

    if (data.status == '00') {
      return data.data as IArticle;
    } else {
      throw new Error(data.message);
    }
  } catch (error: unknown) {
    throw error;
  }
};
