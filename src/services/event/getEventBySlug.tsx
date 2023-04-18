import { IEvent } from '@domains/event';
import { axios, axiosSSR } from '@lib/index';

import { getEventBySlugProps } from './getEventBySlug.types';

export const getEventBySlug = async ({ slug = '', isSSR }: getEventBySlugProps) => {
  try {
    let response;

    const endpoint = `/events/slugs/` + slug;
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
      return data.data as IEvent;
    } else {
      throw new Error(data.message);
    }
  } catch (error: unknown) {
    throw error;
  }
};
