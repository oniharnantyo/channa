import { faDharmachakra } from '@fortawesome/free-solid-svg-icons';
import { Container, Row } from 'react-bootstrap';

import { SectionTitle } from '@/components/Elements';
import SectionStyle from '@/styles/Section.module.css';

import { Card } from './Card';

export const Program = () => {
  return (
    <section className={SectionStyle.section}>
      <Container>
        <SectionTitle isPrimaryColor={true}>Program</SectionTitle>
        <Row>
          <Card
            faIcon={faDharmachakra}
            title="Dhammaduta"
            description="Pelatihan sebanyak 12 pertemuan meliputi  teori Dhamma dan praktik public speaking untuk mencetak Dhammaduta terpercaya"
          />
          <Card
            faIcon={faDharmachakra}
            title="Dhammaduta"
            description="Pelatihan sebanyak 12 pertemuan meliputi  teori Dhamma dan praktik public speaking untuk mencetak Dhammaduta terpercaya"
          />
          <Card
            faIcon={faDharmachakra}
            title="Dhammaduta"
            description="Pelatihan sebanyak 12 pertemuan meliputi  teori Dhamma dan praktik public speaking untuk mencetak Dhammaduta terpercaya"
          />
          <Card
            faIcon={faDharmachakra}
            title="Dhammaduta"
            description="Pelatihan sebanyak 12 pertemuan meliputi  teori Dhamma dan praktik public speaking untuk mencetak Dhammaduta terpercaya"
          />
          <Card
            faIcon={faDharmachakra}
            title="Dhammaduta"
            description="Pelatihan sebanyak 12 pertemuan meliputi  teori Dhamma dan praktik public speaking untuk mencetak Dhammaduta terpercaya"
          />
          <Card
            faIcon={faDharmachakra}
            title="Dhammaduta"
            description="Pelatihan sebanyak 12 pertemuan meliputi  teori Dhamma dan praktik public speaking untuk mencetak Dhammaduta terpercaya"
          />
        </Row>
      </Container>
    </section>
  );
};
