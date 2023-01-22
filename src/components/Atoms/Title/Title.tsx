import clsx from 'clsx';

import Style from './Title.module.css';
import { TitleProps } from './Title.types';

const Title: TitleProps = ({ title, isCenterAlign, className }) => {
  return (
    <h1 className={clsx('text-dark', Style.title, { 'text-center': isCenterAlign }, className)}>
      {title}
    </h1>
  );
};

export default Title;
