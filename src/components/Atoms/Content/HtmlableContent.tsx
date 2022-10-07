import clsx from 'clsx';
import { Container } from 'react-bootstrap';

import Style from './Content.module.css';
import { HtmlableContentProps } from './HtmlableContent.types';

const HtmlableContent: HtmlableContentProps = ({ content }) => {
  return (
    <Container className={clsx(Style.content)}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Container>
  );
};

export default HtmlableContent;
