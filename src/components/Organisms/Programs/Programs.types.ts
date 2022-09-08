import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faDharmachakra } from '@fortawesome/free-solid-svg-icons';
import { FC } from 'react';

interface IProgramProps {
  id: number;
  icon: IconProp;
  title: string;
  description: string;
}

export const programs: IProgramProps[] = [
  {
    id: 1,
    icon: faDharmachakra,
    title: 'Dhammaduta',
    description:
      'Pelatihan sebanyak 12 pertemuan meliputi teori Dhamma dan praktik public speaking untuk mencetak Dhammaduta terpercaya',
  },
  {
    id: 2,
    icon: faDharmachakra,
    title: 'Dhammaduta',
    description:
      'Pelatihan sebanyak 12 pertemuan meliputi teori Dhamma dan praktik public speaking untuk mencetak Dhammaduta terpercaya',
  },
  {
    id: 3,
    icon: faDharmachakra,
    title: 'Dhammaduta',
    description:
      'Pelatihan sebanyak 12 pertemuan meliputi teori Dhamma dan praktik public speaking untuk mencetak Dhammaduta terpercaya',
  },
  {
    id: 4,
    icon: faDharmachakra,
    title: 'Dhammaduta',
    description:
      'Pelatihan sebanyak 12 pertemuan meliputi teori Dhamma dan praktik public speaking untuk mencetak Dhammaduta terpercaya',
  },
  {
    id: 5,
    icon: faDharmachakra,
    title: 'Dhammaduta',
    description:
      'Pelatihan sebanyak 12 pertemuan meliputi teori Dhamma dan praktik public speaking untuk mencetak Dhammaduta terpercaya',
  },
  {
    id: 6,
    icon: faDharmachakra,
    title: 'Dhammaduta',
    description:
      'Pelatihan sebanyak 12 pertemuan meliputi teori Dhamma dan praktik public speaking untuk mencetak Dhammaduta terpercaya',
  },
];
