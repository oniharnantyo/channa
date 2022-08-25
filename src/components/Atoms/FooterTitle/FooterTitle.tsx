import ColorStyle from '@styles/Color.module.css';

import Style from './FooterTitle.module.css';
import { FooterTitleProps } from './FooterTitle.types';

const FooterTitle: FooterTitleProps = ({ title }) => {
  return <p className={`${Style.title} ${ColorStyle.primary}`}>{title}</p>;
};

export default FooterTitle;
