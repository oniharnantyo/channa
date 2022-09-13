import { useRouter } from 'next/router';

import { ArticleDetail } from '@components/Templates/Article/Detail';

const ArtikelDetail = () => {
  const router = useRouter();
  const slug = typeof router.query?.slug === 'string' ? router.query.slug : '';

  return <ArticleDetail slug={slug} />;
};

export default ArtikelDetail;
