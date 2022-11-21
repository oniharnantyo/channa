import { AppProps } from 'next/app';
import Head from 'next/head';

import { Layout } from '@components/Templates/Layout';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { QueryClient, QueryClientProvider } from 'react-query';

import '../styles/globals.scss';

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
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
        <meta name="keywords" content="vidyāsenā, vihāra vidyāloka, buddha" />
        <meta name="author" content="Vidyāsenā Vihāra Vidyāloka" />
        <meta
          name="description"
          content="Organisasi sosial pemuda Buddha yang bermarkas di Vihara Vidyaloka Yogyakarta. Didirikan pada tanggal 1 Februari 1987, telah menjadi salah satu organisasi pemuda Buddhis utama di bawah bimbingan Sangha Theravada Indonesia (STI)."
        ></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </Layout>
    </>
  );
}

export default MyApp;
