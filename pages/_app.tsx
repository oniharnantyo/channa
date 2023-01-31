import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import { Layout } from '@components/Templates/Layout';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useEffect, useState } from 'react';
import { SSRProvider } from 'react-bootstrap';
import { QueryClient, QueryClientProvider } from 'react-query';

import '../styles/globals.scss';

const CenteredDiv = dynamic(() => import('../src/components/Atoms/CenteredDiv/CenteredDiv'));
const LoadingSpinner = dynamic(
  () => import('../src/components/Molecules/LoadingSpinner/LoadingSpinner')
);

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (typeof Window !== 'undefined') setLoading(false);
  });

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <>
      {loading ? (
        <CenteredDiv minHeight="100vh">
          <LoadingSpinner />
        </CenteredDiv>
      ) : (
        <>
          <Head>
            <meta
              name="keywords"
              content="vidyāsenā, vidyasena, vihāra vidyāloka, vihara, vidyaloka, buddha, jogja, yogyakarta"
            />
            <meta name="author" content="Vidyāsenā Vihāra Vidyāloka" />
            <meta
              name="description"
              content="Vidyāsenā merupakan salah satu organisasi mahasiswa dan pelajar Buddhis Indonesia yang berada di Vihāra Vidyāloka Yogyakarta. Vidya berarti pengetahuan Dhamma dan Sena berarti prajurit atau tentara penjaga, sehingga Vidyāsenā berarti Prajurit pengetahuan Dhamma"
            ></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/manifest.json" />
            <link rel="preconnect" href="https://maps.googleapis.com" />
            <link rel="dns-prefetch" href="https://maps.googleapis.com" />
            <link rel="preconnect" href="https://maps.gstatic.com" />
            <link rel="dns-prefetch" href="https://maps.gstatic.com" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          </Head>
          <SSRProvider>
            <QueryClientProvider client={queryClient}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </QueryClientProvider>
          </SSRProvider>
        </>
      )}
    </>
  );
}

export default MyApp;
