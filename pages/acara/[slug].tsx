import { IEvent } from '@domains/event';
import { EventDetail } from '@components/Templates/Event/Detail';
import { getEventBySlug } from '@services/event/getEventBySlug';
import { GetServerSideProps, NextPage } from 'next';

type AcaraDetailProps = {
  event: IEvent;
};

const AcaraDetail: NextPage<AcaraDetailProps> = (props) => {
  const event = props.event as IEvent;

  return <EventDetail event={event} />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = typeof ctx.params?.slug === 'string' ? ctx.params?.slug : '';

  const event = await getEventBySlug({ slug: slug, isSSR: true });

  return {
    props: {
      event: event,
    },
  };
};

export default AcaraDetail;
