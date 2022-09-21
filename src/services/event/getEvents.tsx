import { IEvent } from '@domains/event';
import { axios } from 'src/lib';

import { getEventsProps } from './getEvents.types';

export const getEvents = async ({
  page = 1,
  perPage = 10,
  search = '',
  field = 'created_at',
  direction = 'DESC',
}: getEventsProps) => {
  try {
    const params = {
      page: page,
      perPage: perPage,
      search: search,
      field: field,
      direction: direction,
    };

    const { data } = await axios.get('/events', {
      headers: { 'Content-Type': 'application/json' },
      params: params,
    });

    if (data.status == '00') {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (error: unknown) {
    throw error;
  }
};
