import FreebookCard from '@components/Molecules/FreebookCard/FreebookCard';
import { m } from 'framer-motion';
import { Col } from 'react-bootstrap';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import { MoreableSection } from '../Section';
import { HomeFreebooksProps } from './HomeFreebooks.types';
import LazyMotionDomAnimation from '@lib/framer';

const HomeFreebooks: HomeFreebooksProps = ({ freebooks }) => {
  return (
    <MoreableSection
      linkTitle={'Lihat freebook lainnya >>'}
      link={'/freebook'}
      title={'Freebook Terbaru'}
      variant={'primary'}
    >
      <LazyMotionDomAnimation>
        <m.div
          className="row px-3 px-md-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
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
        </m.div>
      </LazyMotionDomAnimation>
    </MoreableSection>
  );
};

export default HomeFreebooks;
