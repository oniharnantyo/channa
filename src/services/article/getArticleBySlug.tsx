import { IArticle } from '@domains/article';
import { axios } from '@lib/index';

import { getArticleBySlugProps } from './getArticleBySlug.types';

export const getArticleBySlug = async ({ slug = '' }: getArticleBySlugProps) => {
  try {
    const { data } = await axios.get(`/articles/slugs/` + slug, {
      headers: { 'Content-Type': 'application/json' },
    });

    if (data.status == '00') {
      return data.data as IArticle;
    } else {
      throw new Error(data.message);
    }
  } catch (error: unknown) {
    throw error;
  }
};
