import { IEvent } from '@domains/event';
import { axios } from '@lib/index';

import { getEventBySlugProps } from './getEventBySlug.types';

export const getEventBySlug = async ({ slug = '' }: getEventBySlugProps) => {
  try {
    const { data } = await axios.get(`/events/slugs/` + slug, {
      headers: { 'Content-Type': 'application/json' },
    });

    if (data.status == '00') {
      return data.data as IEvent;
    } else {
      throw new Error(data.message);
    }
  } catch (error: unknown) {
    throw error;
  }
};
