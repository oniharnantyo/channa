import Image from 'next/image';
import Link from 'next/link';

import { Content } from '@components/Atoms/Content';
import { Label } from '@components/Atoms/Label';
import { StyledButton } from '@components/Atoms/StyledButton';
import { Title } from '@components/Atoms/Title';
import { IArticle } from '@domains/article';
import { faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { getArticleBySlug } from '@services/article/getArticleBySlug';
import { formatDate } from '@utils/format';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useQuery } from 'react-query';

import LatestArticles from '../LatestArticles/LatestArticles';
import { SectionNoTitle } from '../Section';
import { ArticleDetailProps } from './ArticleDetail.types';

const ArticleDetail: ArticleDetailProps = ({ slug }) => {
  const [article, setArticle] = useState({} as IArticle);

  const {
    data: articleData,
    error,
    refetch,
    isFetching,
  } = useQuery(['getArticleBySlug', slug], () => getArticleBySlug({ slug }), {
    retry: false,
  });

  useEffect(() => {
    if (articleData) {
      setArticle(articleData);
    }
  }, [articleData]);

  const createdAtDate = formatDate(article.createdAt, 'DD MMMM YYYY');

  return (
    <>
      <SectionNoTitle>
        <Row className="mb-4">
          <Col sm={12} md={6} lg={6}>
            <Image
              src={article.imageURL as string}
              alt={articleData?.imageDescription}
              width="500"
              height="300"
              layout="responsive"
              objectFit="contain"
            />
          </Col>
          <Col sm={12} md={6} lg={6}>
            <Title title={article.title}></Title>
            <Label
              variant={'primary'}
              size={'lg'}
              icon={faCalendarAlt}
              label={createdAtDate}
            ></Label>
            <Label variant={'primary'} size={'lg'} icon={faUser} label={article?.author}></Label>
          </Col>
        </Row>
        <Row>
          <Col lg={9}>
            <Content>
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </Content>
          </Col>
          <Col lg={3} className="">
            <LatestArticles />
          </Col>
        </Row>
      </SectionNoTitle>
      <SectionNoTitle>
        <Row>
          <Col className="text-center">
            <Link href={'/acara'}>
              <StyledButton variant="outline-primary" size="lg">
                Baca Artikel Lainnya
              </StyledButton>
            </Link>
          </Col>
        </Row>
      </SectionNoTitle>
    </>
  );
};

export default ArticleDetail;
