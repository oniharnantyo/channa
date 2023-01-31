import { ArticleCard } from '@components/Molecules/ArticleCard';
import { m } from 'framer-motion';
import { Col, Row } from 'react-bootstrap';

import { MoreableSection } from '../Section';
import { HomeArticlesProps } from './HomeArticles.types';
import LazyMotionDomAnimation from '@lib/framer';

const HomeArticles: HomeArticlesProps = ({ articles }) => {
  return (
    <MoreableSection
      title={'Artikel'}
      variant={'primary'}
      linkTitle={'Lihat artikel lainnya >>'}
      link={'/artikel'}
    >
      <Row className="px-3 px-md-0">
        <LazyMotionDomAnimation>
          {articles.map((article, index) => (
            <m.div
              key={article.id}
              className="col-md-4 mb-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <ArticleCard
                key={article.id}
                title={article.title}
                slug={article.slug}
                imageUrl={article.thumbnailURL || ''}
                imageAlt={article.imageDescription}
                createdAt={article.createdAt}
                author={article.author}
                description={article.description}
                isBodyMargin={true}
              />
            </m.div>
          ))}
        </LazyMotionDomAnimation>
      </Row>
    </MoreableSection>
  );
};

export default HomeArticles;
