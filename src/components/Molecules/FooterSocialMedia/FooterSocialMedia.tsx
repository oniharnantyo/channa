import { LogoImage } from '@components/Atoms/Image';
import { Label } from '@components/Atoms/Label';
import { Stack } from 'react-bootstrap';

import { FooterSocialMediaProps } from './FooterSocialMedia.types';

const FooterSocialMedia: FooterSocialMediaProps = ({ name, logo, logoAlt, link }) => {
  return (
    <>
      <Stack direction="horizontal" gap={2} className="mb-1">
        <LogoImage logo={logo} alt={logoAlt} height={20} width={20} />
        <Label variant="primary" label={name} url={link} />
      </Stack>
    </>
  );
};

export default FooterSocialMedia;
