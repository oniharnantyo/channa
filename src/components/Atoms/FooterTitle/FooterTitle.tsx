import Style from './FooterTitle.module.scss';
import { FooterTitleProps } from './FooterTitle.types';

const FooterTitle: FooterTitleProps = ({ title }) => {
  return <span className={`${Style.title}`}>{title}</span>;
};

export default FooterTitle;
