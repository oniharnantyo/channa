import Image from 'next/image';
import Link from 'next/link';

import { Content } from '@components/Atoms/Content';
import { Label } from '@components/Atoms/Label';
import { StyledButton } from '@components/Atoms/StyledButton';
import { Title } from '@components/Atoms/Title';
import { faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { formatDate } from '@utils/format';
import { Col, Row } from 'react-bootstrap';

import LatestArticles from '../LatestArticles/LatestArticles';
import { SectionNoTitle } from '../Section';
import { ArticleDetailProps } from './ArticleDetail.types';

const ArticleDetail: ArticleDetailProps = ({ article }) => {
  const createdAtDate = formatDate(article.createdAt, 'DD MMMM YYYY');

  return (
    <>
      <SectionNoTitle>
        <Row className="mb-4">
          <Col sm={12} md={6} lg={6}>
            <Image
              src={article.imageURL as string}
              alt={article?.imageDescription}
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
            <Link href={'/artikel'}>
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
