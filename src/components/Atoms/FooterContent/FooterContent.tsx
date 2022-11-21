import clsx from 'clsx';

import Style from './FooterContent.module.scss';
import { FooterContentProps } from './FooterContent.types';

export const FooterContent: FooterContentProps = ({ content }) => {
  return <p className={clsx(Style.content, Style.wrapper)}>{content}</p>;
};

export default FooterContent;
