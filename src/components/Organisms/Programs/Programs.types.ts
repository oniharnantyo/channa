import bookLogo from '@assets/image/book-solid.svg';
import dhammacakkaLogo from '@assets/image/dharmachakra-solid.svg';
import dropletLogo from '@assets/image/droplet-solid.svg';
import faceSmileLogo from '@assets/image/face-smile-solid.svg';
import handsPrayingLogo from '@assets/image/hands-praying-solid.svg';
import peopleGroupLogo from '@assets/image/people-group-solid.svg';

interface IProgramProps {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export const programs: IProgramProps[] = [
  {
    id: 1,
    icon: peopleGroupLogo.src,
    title: 'Dhammaduta',
    description:
      'Pelatihan berupa teori dan praktik Dhamma dalam rangka menghasilkan Dhammaduta yang terpercaya',
  },
  {
    id: 2,
    icon: faceSmileLogo.src,
    title: 'Dana Anak Asuk',
    description:
      'Memberikan bantuan penunjang keperluan pendidikan kepada anak-anak Buddhis di sekitar Yogyakarta dan Jawa Tengah',
  },
  {
    id: 3,
    icon: dhammacakkaLogo.src,
    title: 'Dhammaclass',
    description: 'Penyampaian uraian Dhamma oleh Bhikkhu Saṅgha',
  },
  {
    id: 4,
    icon: bookLogo.src,
    title: 'Freebook',
    description:
      'Memproduksi buku-buku Dhamma yang bersifat gratis dan didistribusikan kepada umat Buddha di Indonesia',
  },
  {
    id: 5,
    icon: dropletLogo.src,
    title: 'Donor Darah',
    description:
      'Kegiatan menyumbangkan darah dalam rangka menumbuhkan rasa kepedulian sosial dalam lingkungan bermasyarakat',
  },
  {
    id: 6,
    icon: handsPrayingLogo.src,
    title: 'Visuddhi',
    description: 'Memfasilitasi umat yang ingin berlindung kepada Buddha, Dhamma, dan Sangha',
  },
];
