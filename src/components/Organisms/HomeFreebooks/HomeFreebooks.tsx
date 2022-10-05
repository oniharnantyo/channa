import FreebookCard from '@components/Molecules/FreebookCard/FreebookCard';
import { Row } from 'react-bootstrap';

import { MoreableSection } from '../Section';
import { HomeFreebooksProps } from './HomeFreebooks.types';

const HomeFreebooks: HomeFreebooksProps = ({ freebooks }) => {
  return (
    <MoreableSection
      linkTitle={'Lihat freebook lainnya >>'}
      link={'/freebook'}
      title={'Freebook Terbaru'}
      variant={'primary'}
    >
      <Row>
        {freebooks.map((freebook) => (
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
