import FreebookCard from '@components/Molecules/FreebookCard/FreebookCard';
import { Col, Row } from 'react-bootstrap';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

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
        <Col className="px-sm-3">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination, Navigation]}
          >
            {freebooks.map((freebook) => (
              <SwiperSlide key={freebook.id}>
                <FreebookCard
                  key={freebook.id}
                  title={freebook.title}
                  imageUrl={freebook.thumbnailURL || ''}
                  imageAlt={freebook.imageDescription}
                  author={freebook.author}
                  description={freebook.description}
                  url={freebook.url}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
      </Row>
    </MoreableSection>
  );
};

export default HomeFreebooks;
