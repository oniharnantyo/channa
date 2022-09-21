import Image from 'next/image';

import { Content } from '@components/Atoms/Content';
import { Label } from '@components/Atoms/Label';
import { Title } from '@components/Atoms/Title';
import { IArticle } from '@domains/article';
import { faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { getArticleBySlug } from '@services/article/getArticleBySlug';
import { formatDate } from '@utils/format';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useQuery } from 'react-query';

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
    <SectionNoTitle>
      <Row className="mb-4">
        <Col sm={12} md={6} lg={6}>
          <Image
            src={article.imageURL as string}
            alt={articleData?.imageDescription}
            width="5"
            height="3"
            layout="responsive"
            objectFit="contain"
          />
        </Col>
        <Col sm={12} md={6} lg={6}>
          <Title title={article.title}></Title>
          <Label variant={'primary'} icon={faCalendarAlt} label={createdAtDate}></Label>
          <Label variant={'primary'} icon={faUser} label={article?.author}></Label>
        </Col>
      </Row>
      <Row>
        <Col>
          <Content>
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </Content>
        </Col>
      </Row>
    </SectionNoTitle>
  );
};

export default ArticleDetail;