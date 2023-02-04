import { GetServerSideProps } from 'next';

import { getServerSideSitemap } from 'next-sitemap';

const SITE_URL = process.env.SITE_URL;
const BASE_API = process.env.BASE_API;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const articleFields = await getArticlesSitemaps();
  const eventFields = await getEventsSitemaps();

  const fields = [...articleFields, ...eventFields];

  return getServerSideSitemap(ctx, fields);
};

const getArticlesSitemaps = async () => {
  let fields = [];
  let page = 1;
  let res = [];

  do {
    const data = await fetch(`${BASE_API}/articles?page=${page}&perPage=${5}`, {
      method: 'GET',
    });

    res = await data.json();

    for (let article of res.data) {
      fields.push({
        loc: SITE_URL + '/artikel/' + article.slug,
        lastmod: article.updatedAt,
        priority: 0.7,
      });
    }

    page = page + 1;
  } while (res.data.length !== 0);

  return fields;
};

const getEventsSitemaps = async () => {
  let fields = [];
  let page = 1;
  let res = [];

  do {
    const data = await fetch(`${BASE_API}/events?page=${page}&perPage=${20}`, {
      method: 'GET',
    });

    res = await data.json();

    for (let event of res.data) {
      fields.push({
        loc: SITE_URL + '/acara/' + event.slug,
        lastmod: event.updatedAt,
        priority: 0.7,
      });
    }

    page = page + 1;
  } while (res.data.length !== 0);

  return fields;
};

export default function Sitemap() {}
