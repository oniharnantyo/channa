import Image from 'next/image';
import Link from 'next/link';

import { ArticleLabel } from '@components/Atoms/ArticleLabel';
import { HtmlableContent } from '@components/Atoms/Content';
import { StyledButton } from '@components/Atoms/StyledButton';
import { Title } from '@components/Atoms/Title';
import { Col, Row } from 'react-bootstrap';

import LatestArticles from '../LatestArticles/LatestArticles';
import { SectionNoTitle } from '../Section';
import { ArticleDetailProps } from './ArticleDetail.types';

const ArticleDetail: ArticleDetailProps = ({ article }) => {
  return (
    <Row>
      <Col lg={2}></Col>
      <Col lg={8}>
        <SectionNoTitle>
          <Row className="mb-3 text-center">
            <Title title={article.title}></Title>
            <ArticleLabel author={article.author} date={article.createdAt} />
          </Row>
          <Row className="mb-sm-2 mb-md-3 mb-lg-5">
            <Col sm={12} md={12} lg={12} className="mx-auto">
              <Image
                src={article.imageURL as string}
                alt={article?.imageDescription}
                width="1000"
                height="500"
                layout="responsive"
                objectFit="contain"
              />
            </Col>
          </Row>
          <Row>
            <Col lg={9}>
              <HtmlableContent content={article.content} />
            </Col>
            <Col lg={3}>
              <LatestArticles />
            </Col>
          </Row>
        </SectionNoTitle>
        <SectionNoTitle>
          <Row>
            <Col className="text-center">
              <Link href={'/artikel'}>
                <StyledButton variant="outline-primary" size="lg">
                  Baca Artikel Lainnya
                </StyledButton>
              </Link>
            </Col>
          </Row>
        </SectionNoTitle>
      </Col>
      <Col lg={2}></Col>
    </Row>
  );
};

export default ArticleDetail;
