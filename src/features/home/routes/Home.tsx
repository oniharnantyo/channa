import { LatestEvent } from '@/features/events';

import { Article } from '../components/Article';
import { Banner } from '../components/Banner';
import { Donate } from '../components/Donate';
import { Freebook } from '../components/Freebook';
import { Program } from '../components/Program';

export const Home = () => {
  return (
    <>
      <Banner />
      <LatestEvent />
      <Program />
      <Freebook />
      <Donate />
      <Article />
    </>
  );
};
