import { useRouter } from 'next/router';

import { EventDetail } from '@components/Templates/Event/Detail';

const AcaraDetail = () => {
  const router = useRouter();
  const slug = typeof router.query?.slug === 'string' ? router.query.slug : '';

  return <EventDetail slug={slug} />;
};

export default AcaraDetail;
