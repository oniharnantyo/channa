import { useQuery } from 'react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';

import { LatestEvent } from '../types';

export const getLatestEvent = (): Promise<LatestEvent> => {
  return axios.get('/latest-event').then((res) => {
    return res.data;
  });
};

type QueryFnType = typeof getLatestEvent;

type UseGetLatestEventOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useLatestEvent = ({ config }: UseGetLatestEventOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['latestEvent'],
    queryFn: () => getLatestEvent(),
  });
};
