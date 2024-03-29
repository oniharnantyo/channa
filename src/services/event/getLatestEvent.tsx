import { IEvent } from '@domains/event';
import { axios } from 'src/lib';

export const getLatestEvent = async () => {
  try {
    const { data } = await axios.get('/events/latest', {
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
