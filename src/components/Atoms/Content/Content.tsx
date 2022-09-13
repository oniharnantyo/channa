import clsx from 'clsx';

import Style from './Content.module.css';
import { ContentProps } from './Content.types';

const Content: ContentProps = ({ children }) => {
  return <div className={clsx(Style.content)}>{children}</div>;
};

export default Content;
