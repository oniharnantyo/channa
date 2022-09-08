import FreebookCard from '@components/Molecules/FreebookCard/FreebookCard';
import { getFreebooks } from '@services/freebook/getFreebooks';
import { Row } from 'react-bootstrap';
import { useQuery } from 'react-query';

import { MoreableSection } from '../Section';

const HomeFreebooks = () => {
  const {
    data: freebooksData,
    error,
    refetch,
    isFetching,
  } = useQuery(['getFreebooks'], () => getFreebooks({ page: 1, perPage: 2 }), {
    retry: false,
  });

  return (
    <MoreableSection
      linkTitle={'Lihat freebook lainnya >>'}
      link={'/freebook'}
      title={'Freebook Terbaru'}
      variant={'primary'}
    >
      <Row>
        {freebooksData?.map((freebook) => (
          <FreebookCard
            key={freebook.id}
            title={freebook.title}
            imageUrl={freebook.thumbnailURL || ''}
            imageAlt={freebook.imageDescription}
            author={freebook.author}
            description={freebook.description}
            url={freebook.url}
          />
        ))}
      </Row>
    </MoreableSection>
  );
};

export default HomeFreebooks;
