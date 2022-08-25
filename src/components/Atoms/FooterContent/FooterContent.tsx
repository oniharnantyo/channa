import ColorStyle from '@styles/Color.module.css';
import classNames from 'classnames';

import Style from './FooterContent.module.css';
import { FooterContentProps } from './FooterContent.types';

export const FooterContent: FooterContentProps = ({ content }) => {
  return <p className={classNames(Style.content, Style.wrapper, ColorStyle.grey)}>{content}</p>;
};

export default FooterContent;
