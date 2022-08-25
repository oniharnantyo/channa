import { FC } from 'react';

interface IFooterSocialMediaProps {
  name: string;
  logo: string;
  logoAlt?: string;
  link: string;
}

export type FooterSocialMediaProps = FC<IFooterSocialMediaProps>;
