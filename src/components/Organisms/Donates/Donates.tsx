import DaaImage from '@assets/image/donate/daa.webp';
import FreebokImage from '@assets/image/donate/freebook.webp';
import OperasionalImage from '@assets/image/donate/operasional.webp';
import { Title } from '@components/Atoms/Title';
import { DonateItem } from '@components/Molecules/DonateItem';

import { SectionNoTitle } from '../Section';

const Donates = () => {
  return (
    <SectionNoTitle>
      <Title title="Mari Berdana" isCenterAlign />
      <DonateItem
        title={'Dana Paramita Vihāra Vidyāloka'}
        account={'Bank BCA 0600679147 (a.n Hery Nugroho)'}
        confirm={'Konfirmasi ke +62 815-6866-543'}
        description={
          'Melatih kemurahan hati dengan menyisihkan sebagian materi untuk diberikan. Dana akan digunakan untuk pelayanan dan pembinaan umat Buddha di Vihāra Vidyāloka.'
        }
        imageURL={OperasionalImage.src}
        imageAlt={'bangunan vihara vidyaloka'}
        confirmUrl="http://wa.me/+628156866543"
      />
      <DonateItem
        title={'Dana Anak Asuh'}
        account={'Bank BCA 0600679198 (a.n Hery Nugroho)'}
        confirm={'Konfirmasi ke  +62 823-9126-4822 (Josephine)'}
        description={`Dana Anak Asuh (DAA) adalah program yang bertujuan untuk membantu siswa/i Buddhis di desa sekitar Yogyakarta dan Jawa Tengah dengan memberikan bantuan penunjang keperluan pendidikan.`}
        imageURL={DaaImage.src}
        imageAlt={'dana anak asuh vidyasena'}
        isImageRight={true}
        confirmUrl="http://wa.me/+6282391264822"
      />
      <DonateItem
        title={'Freebook'}
        account={'Bank BCA 0600679210 (a.n Hery Nugroho)'}
        confirm={'Konfirmasi ke +62 899-506-6277'}
        description={
          'Lebih dari 80 judul buku telah diterbitkan Vidyāsenā dan dikirim ke seluruh vihāra di Indonesia. Dengan berdana freebook, anda turut serta membantu penerbitan buku dan menyebarkan Buddha Dhamma.'
        }
        imageURL={FreebokImage.src}
        imageAlt={'freebook vidyasena'}
        confirmUrl="http://wa.me/+628995066277"
      />
    </SectionNoTitle>
  );
};

export default Donates;
