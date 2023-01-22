import dynamic from 'next/dynamic';
import Head from 'next/head';

import { Hero } from '@components/Organisms/Hero';
import useOnScreen from '@hooks/useOnScreen';
import { useEffect, useRef, useState } from 'react';

import { HomeProps } from './Home.types';

const Programs = dynamic(() => import('../../Organisms/Programs/Programs'));
const Freebooks = dynamic(() => import('../../Organisms/HomeFreebooks/HomeFreebooks'));
const Donate = dynamic(() => import('../../Organisms/HomeDonate/HomeDonate'));
const Articles = dynamic(() => import('../../Organisms/HomeArticles/HomeArticles'));
const LatestEvent = dynamic(() => import('../../Organisms/Events/LatestEvent/LatestEvent'));

const Home: HomeProps = ({ articles, freebooks }) => {
  const title = 'Beranda - Vidyāsenā Vihāra Vidyāloka';
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Hero />
      <LatestEvent />
      <Programs />
      <Freebooks freebooks={freebooks} />
      <Donate />
      <Articles articles={articles} />
    </>
  );
};

export default Home;
