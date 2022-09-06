import { IFreebook } from '@domains/freebook';
import { axios } from 'src/lib';

import { getFreebooksProps } from './getFreebooks.types';

export const getFreebooks = async ({
  page = 1,
  perPage = 10,
  search = '',
  field = 'created_at',
  direction = 'ASC',
}: getFreebooksProps) => {
  try {
    const params = {
      page: page,
      perPage: perPage,
      search: search,
      field: field,
      direction: direction,
    };

    const { data } = await axios.get('/freebooks', {
      headers: { 'Content-Type': 'application/json' },
      params: params,
    });

    if (data.status == '00') {
      return data.data as Array<IFreebook>;
    } else {
      throw new Error(data.message);
    }
  } catch (error: unknown) {
    throw error;
  }
};
