import HomeBanner from '@assets/image/hero-banner.webp';
import { DonateItem } from '@components/Molecules/DonateItem';

import { SectionNoTitle } from '../Section';

const Donates = () => {
  return (
    <SectionNoTitle>
      <DonateItem
        title={'Operasional Vihara Vidyaloka'}
        account={'BCA 1234566 a.n Hery Nugroho (Rekening VS)'}
        confirm={'No HP Vidyasena untuk konfirmasi'}
        description={
          'Komunitas Pemuda Buddhis Kecamatan Panggang bekerjasama dengan Sanggar Mustika Budaya menyelenggarakan pergelaran seni rakyat di Dukuh Nglaos, Dusun Wiloso, Desa Girikarto, Kecamatan Panggang, Gunung Kidul, Sabtu (27/8). '
        }
        imageURL={HomeBanner.src}
        imageAlt={'test'}
      />
      <DonateItem
        title={'Dana Anak Asuh'}
        account={'BCA 1234566 a.n Hery Nugroho (Rekening Sosial)'}
        confirm={'No HP Sosial untuk konfirmasi'}
        description={
          'Komunitas Pemuda Buddhis Kecamatan Panggang bekerjasama dengan Sanggar Mustika Budaya menyelenggarakan pergelaran seni rakyat di Dukuh Nglaos, Dusun Wiloso, Desa Girikarto, Kecamatan Panggang, Gunung Kidul, Sabtu (27/8). '
        }
        imageURL={HomeBanner.src}
        imageAlt={'test'}
        isImageRight={true}
      />
      <DonateItem
        title={'Freebook'}
        account={'BCA 1234566 a.n Hery Nugroho (Rekening Usaha)'}
        confirm={'No HP Vidyasena untuk konfirmasi'}
        description={
          'Komunitas Pemuda Buddhis Kecamatan Panggang bekerjasama dengan Sanggar Mustika Budaya menyelenggarakan pergelaran seni rakyat di Dukuh Nglaos, Dusun Wiloso, Desa Girikarto, Kecamatan Panggang, Gunung Kidul, Sabtu (27/8). '
        }
        imageURL={HomeBanner.src}
        imageAlt={'test'}
      />
    </SectionNoTitle>
  );
};

export default Donates;
