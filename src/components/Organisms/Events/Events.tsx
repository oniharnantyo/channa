import dynamic from 'next/dynamic';

import { CenteredDiv } from '@components/Atoms/CenteredDiv';
import { NoData } from '@components/Atoms/NoData';
import { EventCard } from '@components/Molecules/EventCard';
import { LoadingSpinner } from '@components/Molecules/LoadingSpinner';
import { Search } from '@components/Molecules/Search';
import { IEvent } from '@domains/event';
import { getEvents } from '@services/event/getEvents';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useQuery } from 'react-query';

import { SectionNoTitle } from '../Section';

const Pagination = dynamic(import('../../Molecules/Pagination/Pagination'));

const Events = () => {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [events, setEvents] = useState([] as IEvent[]);
  const [searchTemp, setSearchTemp] = useState('');
  const [search, setSearch] = useState('');

  const {
    data: eventsData,
    error,
    refetch,
    isFetching,
  } = useQuery(
    ['getEvents', page, search],
    () => getEvents({ page: page, perPage: 9, search: search }),
    {
      retry: false,
    }
  );

  useEffect(() => {
    if (eventsData) {
      setEvents(eventsData?.data as IEvent[]);
      setPageCount(eventsData?.meta?.totalPages);
    }
    window.scrollTo(0, 0);
  });

  return (
    <>
      <SectionNoTitle>
        <Row>
          <Col md={8} className="px-3">
            <Search
              placeholder="Cari judul acara"
              onType={(e: any) => setSearchTemp(e.target.value)}
              onFinish={() => setSearch(searchTemp)}
              onEnter={() => setSearch(searchTemp)}
            />
          </Col>
        </Row>
      </SectionNoTitle>
      <SectionNoTitle variant="white">
        {events.length === 0 && !isFetching ? (
          <CenteredDiv minHeight="20vh">
            {!search ? (
              <NoData message="Tidak ada acara" />
            ) : (
              <NoData message="Acara tidak ditemukan" />
            )}
          </CenteredDiv>
        ) : isFetching ? (
          <CenteredDiv minHeight="20vh">
            <LoadingSpinner />
          </CenteredDiv>
        ) : (
          <Row>
            {events &&
              events.map((event) => (
                <EventCard
                  key={event.id}
                  slug={event.slug}
                  title={event.title}
                  imageUrl={event.thumbnailURL as string}
                  imageAlt={event.imageDescription}
                  location={event.location}
                  startAt={event.startAt}
                />
              ))}
          </Row>
        )}
      </SectionNoTitle>
      {pageCount > 1 && (
        <SectionNoTitle>
          <Pagination
            pageCount={pageCount}
            onPageChange={(event) => {
              setPage(event.selected + 1);
            }}
          />
        </SectionNoTitle>
      )}
    </>
  );
};

export default Events;
