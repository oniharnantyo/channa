import clsx from 'clsx';
import { Container } from 'react-bootstrap';

import Style from './Content.module.css';
import { ContentProps } from './Content.types';

const Content: ContentProps = ({ children }) => {
  return <Container className={clsx(Style.content)}>{children}</Container>;
};

export default Content;
