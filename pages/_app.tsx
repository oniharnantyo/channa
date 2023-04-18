import type { AppProps, NextWebVitalsMetric } from 'next/app';
import Head from 'next/head';

import { Layout } from '@components/Templates/Layout';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { GoogleAnalytics, event, usePageViews } from 'nextjs-google-analytics';
import { SSRProvider } from 'react-bootstrap';
import { QueryClient, QueryClientProvider } from 'react-query';
import ViharaVidyalokaImage from '@assets/image/history/sekarang.webp';

import '../styles/globals.scss';

config.autoAddCss = false;

export function reportWebVitals(metric: NextWebVitalsMetric) {
  const { name, label, value, id } = metric;

  event(name, {
    category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    label: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  });
}

function MyApp({ Component, pageProps }: AppProps) {
  usePageViews();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="vidyāsenā, vidyasena, vihāra vidyāloka, vihara, vidyaloka, buddha, jogja, yogyakarta"
        />
        <meta name="author" content="Vidyāsenā Vihāra Vidyāloka" />
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
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x1twitter:description6.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" />
        <link rel="dns-prefetch" href="https://maps.gstatic.com" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <SSRProvider>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
            <GoogleAnalytics strategy="lazyOnload" />
          </Layout>
        </QueryClientProvider>
      </SSRProvider>
    </>
  );
}

export default MyApp;
