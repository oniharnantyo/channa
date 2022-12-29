import { ArticleCard } from '@components/Molecules/ArticleCard';
import { motion } from 'framer-motion';
import { Col, Row } from 'react-bootstrap';

import { MoreableSection } from '../Section';
import { HomeArticlesProps } from './HomeArticles.types';

const HomeArticles: HomeArticlesProps = ({ articles }) => {
  return (
    <MoreableSection
      title={'Artikel'}
      variant={'primary'}
      linkTitle={'Lihat artikel lainnya >>'}
      link={'/artikel'}
    >
      <motion.div
        className="row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        {articles.map((article) => (
          <Col key={article.id} md={4} className="mb-4">
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
          </Col>
        ))}
      </motion.div>
    </MoreableSection>
  );
};

export default HomeArticles;
