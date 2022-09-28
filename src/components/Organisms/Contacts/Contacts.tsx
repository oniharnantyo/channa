import HomeBanner from '@assets/image/home-banner.webp';
import { ContactItem } from '@components/Molecules/ContactItem';

import { SectionNoTitle } from '../Section';

const Contacts = () => {
  return (
    <SectionNoTitle>
      <ContactItem
        title={'Operasional Vihara Vidyaloka'}
        account={'BCA 1234566 a.n Hery Nugroho (Rekening VS)'}
        confirm={'No HP Vidyasena untuk konfirmasi'}
        description={
          'Komunitas Pemuda Buddhis Kecamatan Panggang bekerjasama dengan Sanggar Mustika Budaya menyelenggarakan pergelaran seni rakyat di Dukuh Nglaos, Dusun Wiloso, Desa Girikarto, Kecamatan Panggang, Gunung Kidul, Sabtu (27/8). '
        }
        imageURL={HomeBanner.src}
        imageAlt={'test'}
      />
      <ContactItem
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
      <ContactItem
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

export default Contacts;
