import dynamic from 'next/dynamic';
import Head from 'next/head';

import { Banner } from '@components/Organisms/Banner';
import { LatestEvent } from '@components/Organisms/Events/LatestEvent';
import useOnScreen from '@hooks/useOnScreen';
import { useEffect, useRef, useState } from 'react';

import { HomeProps } from './Home.types';

const Programs = dynamic(() => import('../../Organisms/Programs/Programs'));
const Freebooks = dynamic(() => import('../../Organisms/HomeFreebooks/HomeFreebooks'));
const Donate = dynamic(() => import('../../Organisms/HomeDonate/HomeDonate'));
const Articles = dynamic(() => import('../../Organisms/HomeArticles/HomeArticles'));

const Home: HomeProps = ({ articles, freebooks }) => {
  const programsRef = useRef<HTMLInputElement>(null);
  const freebooksRef = useRef<HTMLInputElement>(null);
  const donateRef = useRef<HTMLInputElement>(null);
  const articlesRef = useRef<HTMLInputElement>(null);

  const programsRefValue = useOnScreen(programsRef);
  const freebooksRefValue = useOnScreen(freebooksRef);
  const donateRefValue = useOnScreen(donateRef);
  const articlesRefValue = useOnScreen(articlesRef);

  const [isProgramsRef, setIsProgramsRef] = useState(false);
  const [isFreebooksRef, setIsFreebooksRef] = useState(false);
  const [isDonateRef, setIsDonateRef] = useState(false);
  const [isArticlesRef, setIsArticlesRef] = useState(false);

  useEffect(() => {
    if (!isProgramsRef) setIsProgramsRef(programsRefValue);
    if (!isFreebooksRef) setIsFreebooksRef(freebooksRefValue);
    if (!isDonateRef) setIsDonateRef(donateRefValue);
    if (!isArticlesRef) setIsArticlesRef(articlesRefValue);
  }, [programsRefValue, freebooksRefValue, donateRefValue, articlesRefValue]);

  const title = 'Beranda - Vidyāsenā Vihāra Vidyāloka';
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Banner />
      <LatestEvent />
      <div ref={programsRef}>{isProgramsRef && <Programs />}</div>
      <div ref={freebooksRef}>{isFreebooksRef && <Freebooks freebooks={freebooks} />}</div>
      <div ref={donateRef}>{isDonateRef && <Donate />}</div>
      <div ref={articlesRef}>{isArticlesRef && <Articles articles={articles} />}</div>
    </>
  );
};

export default Home;
