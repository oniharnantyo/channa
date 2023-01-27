import Style from './FooterTitle.module.scss';
import { FooterTitleProps } from './FooterTitle.types';

const FooterTitle: FooterTitleProps = ({ title }) => {
  return <h4 className={`${Style.title}`}>{title}</h4>;
};

export default FooterTitle;
