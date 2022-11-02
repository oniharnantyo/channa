import ColorStyle from '@styles/Color.module.css';
import clsx from 'clsx';

import Style from './Title.module.css';
import { TitleProps } from './Title.types';

const Title: TitleProps = ({ title, isCenterAlign }) => {
  return (
    <h1 className={clsx(ColorStyle.primary, Style.title, { 'text-center': isCenterAlign })}>{title}</h1>
  );
};

export default Title;
