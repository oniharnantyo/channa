import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faDharmachakra } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';

import { SectionTitle } from '@/components/Elements';

type programCardProps = {
  faIcon: IconProp;
  title: string;
  description: string;
};

const ProgramCard = ({ faIcon, title, description }: programCardProps) => {
  return (
    <Col md={6} lg={4}>
      <Col md={12} className="mb-4 mb-lg-4 program-card">
        <div className="program-content d-block">
          <div className="program-icon mb-3">
            <FontAwesomeIcon icon={faIcon} className="icon-wrap color-primary"></FontAwesomeIcon>
          </div>
          <div>
            <h3 className="color-primary">{title}</h3>
            <p className="color-primary-lighter">{description}</p>
          </div>
        </div>
      </Col>
    </Col>
  );
};

export const Program = () => {
  return (
    <section className="section">
      <Container>
        <SectionTitle title="Program" isPrimaryColor={true}></SectionTitle>
        <Row>
          <ProgramCard
            faIcon={faDharmachakra}
            title="Dhammaduta"
            description="Pelatihan sebanyak 12 pertemuan meliputi  teori Dhamma dan praktik public speaking untuk mencetak Dhammaduta terpercaya"
          />
          <ProgramCard
            faIcon={faDharmachakra}
            title="Dhammaduta"
            description="Pelatihan sebanyak 12 pertemuan meliputi  teori Dhamma dan praktik public speaking untuk mencetak Dhammaduta terpercaya"
          />
          <ProgramCard
            faIcon={faDharmachakra}
            title="Dhammaduta"
            description="Pelatihan sebanyak 12 pertemuan meliputi  teori Dhamma dan praktik public speaking untuk mencetak Dhammaduta terpercaya"
          />
          <ProgramCard
            faIcon={faDharmachakra}
            title="Dhammaduta"
            description="Pelatihan sebanyak 12 pertemuan meliputi  teori Dhamma dan praktik public speaking untuk mencetak Dhammaduta terpercaya"
          />
          <ProgramCard
            faIcon={faDharmachakra}
            title="Dhammaduta"
            description="Pelatihan sebanyak 12 pertemuan meliputi  teori Dhamma dan praktik public speaking untuk mencetak Dhammaduta terpercaya"
          />
          <ProgramCard
            faIcon={faDharmachakra}
            title="Dhammaduta"
            description="Pelatihan sebanyak 12 pertemuan meliputi  teori Dhamma dan praktik public speaking untuk mencetak Dhammaduta terpercaya"
          />
        </Row>
      </Container>
    </section>
  );
};
