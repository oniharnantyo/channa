import ColorStyle from '@styles/Color.module.css';
import clsx from 'clsx';

import Style from './FooterContent.module.css';
import { FooterContentProps } from './FooterContent.types';

export const FooterContent: FooterContentProps = ({ content }) => {
  return <p className={clsx(Style.content, Style.wrapper, ColorStyle.grey)}>{content}</p>;
};

export default FooterContent;
