import Link from 'next/link';

import Style from './LinkTitle.module.css';
import { LinkTitleProps } from './LinkTitle.types';
import clsx from "clsx";

const LinkTitle: LinkTitleProps = ({ url, title, variant='primary' }) => {
  return (
    <h5 className={clsx(Style.title, {[Style.primary]: variant ==='primary'}, {[Style.white]: variant === 'white'})}>
      <Link href={url}>{title}</Link>
    </h5>
  );
};

export default LinkTitle;
