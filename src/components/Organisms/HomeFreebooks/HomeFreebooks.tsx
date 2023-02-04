import FreebookCard from '@components/Molecules/FreebookCard/FreebookCard';
import 'glider-js/glider.min.css';
import { useEffect } from 'react';
import { Col } from 'react-bootstrap';
import Glider from 'react-glider';
import sal from 'sal.js';

import { MoreableSection } from '../Section';
import { HomeFreebooksProps } from './HomeFreebooks.types';

const HomeFreebooks: HomeFreebooksProps = ({ freebooks }) => {
  useEffect(() => {
    sal();
  }, []);

  return (
    <MoreableSection
      linkTitle={'Lihat freebook lainnya >>'}
      link={'/freebook'}
      title={'Freebook Terbaru'}
      variant={'primary'}
    >
      <div
        className="row px-3 px-md-0"
        data-sal="slide-right"
        data-sal-duration={700}
        data-sal-easing="ease-in-out-quad"
      >
        <Col className="px-sm-3">
          <Glider
            draggable
            hasArrows
            slidesToShow={4}
            slidesToScroll={1}
            responsive={[
              { breakpoint: 0, settings: { slidesToShow: 1 } },
              { breakpoint: 640, settings: { slidesToShow: 2 } },
              { breakpoint: 768, settings: { slidesToShow: 3 } },
              { breakpoint: 1024, settings: { slidesToShow: 4 } },
            ]}
          >
            {freebooks.map((freebook) => (
              <div className="mx-3" key={freebook.id}>
                <FreebookCard
                  key={freebook.id}
                  title={freebook.title}
                  imageUrl={freebook.thumbnailURL || ''}
                  imageAlt={freebook.imageDescription}
                  author={freebook.author}
                  description={freebook.description}
                  url={freebook.url}
                />
              </div>
            ))}
          </Glider>
        </Col>
      </div>
    </MoreableSection>
  );
};

export default HomeFreebooks;
