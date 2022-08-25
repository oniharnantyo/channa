import { FooterContent } from '@components/Atoms/FooterContent';
import { FooterTitle } from '@components/Atoms/FooterTitle';

import { FooterItemProps } from './FooterItem.types';

const FooterItem: FooterItemProps = ({ title, content }) => {
  return (
    <>
      <FooterTitle title={title}></FooterTitle>
      <FooterContent content={content}></FooterContent>
    </>
  );
};

export default FooterItem;
