import { EventCard } from '@components/Molecules/EventCard';
import { Pagination } from '@components/Molecules/Pagination';
import { IEvent } from '@domains/event';
import { getEvents } from '@services/event/getEvents';
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useQuery } from 'react-query';

import { SectionNoTitle } from '../Section';

const Events = () => {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [events, setEvents] = useState([] as IEvent[]);

  const {
    data: eventsData,
    error,
    refetch,
    isFetching,
  } = useQuery(['getEvents', page], () => getEvents({ page: page, perPage: 9 }), {
    retry: false,
  });

  useEffect(() => {
    if (eventsData) {
      setEvents(eventsData?.data as IEvent[]);
      setPageCount(eventsData?.meta?.totalPages);
    }
    window.scrollTo(0, 0);
  });

  return (
    <>
      <SectionNoTitle variant="white">
        <Row>
          {events &&
            events.map((event) => (
              <EventCard
                slug={event.slug}
                title={event.title}
                imageUrl={event.thumbnailURL as string}
                imageAlt={event.imageDescription}
                location={event.location}
                createdAt={event.createdAt}
              />
            ))}
        </Row>
      </SectionNoTitle>
      <SectionNoTitle>
        <Pagination
          pageCount={pageCount}
          onPageChange={(event) => {
            setPage(event.selected + 1);
          }}
        />
      </SectionNoTitle>
    </>
  );
};

export default Events;
