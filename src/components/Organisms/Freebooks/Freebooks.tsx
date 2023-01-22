import dynamic from 'next/dynamic';

import { CenteredDiv } from '@components/Atoms/CenteredDiv';
import { NoData } from '@components/Atoms/NoData';
import { FreebookCard } from '@components/Molecules/FreebookCard';
import { LoadingSpinner } from '@components/Molecules/LoadingSpinner';
import { Search } from '@components/Molecules/Search';
import { IFreebook } from '@domains/freebook';
import { getFreebooks } from '@services/freebook/getFreebooks';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useQuery } from 'react-query';

import { SectionNoTitle } from '../Section';

const Pagination = dynamic(import('../../Molecules/Pagination/Pagination'));

const Freebooks = () => {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [searchTemp, setSearchTemp] = useState('');
  const [search, setSearch] = useState('');
  const [freebooks, setFreebooks] = useState([] as IFreebook[]);

  const {
    data: freebooksData,
    error,
    refetch,
    isFetching,
  } = useQuery(
    ['getFreebooks', page, search],
    () => getFreebooks({ page: page, perPage: 8, search: search }),
    {
      retry: false,
    }
  );

  useEffect(() => {
    if (freebooksData) {
      setFreebooks(freebooksData?.data as IFreebook[]);
      setPageCount(freebooksData?.meta?.totalPages);
    }
    window.scrollTo(0, 0);
  }, [freebooksData]);

  return (
    <>
      <SectionNoTitle>
        <Row>
          <Col md={8} className="px-3">
            <Search
              placeholder="Cari judul freebook"
              onType={(e: any) => setSearchTemp(e.target.value)}
              onFinish={() => setSearch(searchTemp)}
              onEnter={() => setSearch(searchTemp)}
            />
          </Col>
        </Row>
      </SectionNoTitle>
      <SectionNoTitle>
        {freebooks.length === 0 && !isFetching ? (
          <CenteredDiv minHeight="55vh">
            {!search ? (
              <NoData message="Tidak ada freebook" />
            ) : (
              <NoData message="Freebook tidak ditemukan" />
            )}
          </CenteredDiv>
        ) : isFetching ? (
          <CenteredDiv minHeight="55vh">
            <LoadingSpinner />
          </CenteredDiv>
        ) : (
          <Row>
            {freebooks &&
              freebooks.map((freebook) => (
                <Col key={freebook.id} md={3} className="mb-4">
                  <FreebookCard
                    title={freebook.title}
                    author={freebook.author}
                    description={freebook.description}
                    imageUrl={freebook.thumbnailURL as string}
                    imageAlt={freebook.imageDescription}
                    url={freebook.url}
                    variant={'white'}
                  />
                </Col>
              ))}
          </Row>
        )}
      </SectionNoTitle>
      <SectionNoTitle>
        {pageCount > 1 && (
          <Pagination
            pageCount={pageCount}
            onPageChange={(event: any) => {
              setPage(event.selected + 1);
            }}
          />
        )}
      </SectionNoTitle>
    </>
  );
};

export default Freebooks;
