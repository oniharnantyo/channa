import { LogoImage } from '@components/Atoms/Image';

import Style from './FooterSocialMedia.module.css';
import { FooterSocialMediaProps } from './FooterSocialMedia.types';

const FooterSocialMedia: FooterSocialMediaProps = ({ name, logo, logoAlt, link }) => {
  return (
    <>
      <p className={Style.socialMedia}>
        <LogoImage logo={logo} alt={logoAlt} height={0} width={0} />
        <a href={link} target="_blank" rel="noreferrer">
          {name}
        </a>
      </p>
    </>
  );
};

export default FooterSocialMedia;
