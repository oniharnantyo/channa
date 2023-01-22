import clsx from 'clsx';
import { Container } from 'react-bootstrap';

import Style from './Content.module.css';
import { ContentProps } from './Content.types';

const Content: ContentProps = ({ children }) => {
  return <div className={clsx(Style.content, 'text-dark')}>{children}</div>;
};

export default Content;
