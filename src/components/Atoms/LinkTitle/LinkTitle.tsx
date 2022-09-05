import Link from 'next/link';

import Style from './LinkTitle.module.css';
import { LinkTitleProps } from './LinkTitle.types';

const LinkTitle: LinkTitleProps = ({ url, title }) => {
  return (
    <h5 className={Style.title}>
      <Link href={url}>{title}</Link>
    </h5>
  );
};

export default LinkTitle;
