import Link from 'next/link';

import { StyledButton } from '@components/Atoms/StyledButton';
import { ArticleDetail as OArticleDetail } from '@components/Organisms/ArticleDetail';
import { Header } from '@components/Organisms/Header';
import { SectionNoTitle } from '@components/Organisms/Section';
import { Layout } from '@components/Templates/Layout';
import { Col, Row } from 'react-bootstrap';

import { ArticleDetailProps } from './ArticleDetail.types';

const ArticleDetail: ArticleDetailProps = ({ slug }) => {
  return (
    <Layout>
      <Header />
      <OArticleDetail slug={slug} />
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
    </Layout>
  );
};

export default ArticleDetail;
