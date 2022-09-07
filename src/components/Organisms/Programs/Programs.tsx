import { ProgramCard } from '@components/Molecules/ProgramCard';
import { Row } from 'react-bootstrap';

import { Section } from '../Section';
import { programs } from './Programs.types';

const Programs = () => {
  return (
    <Section title={'Program'} variant={'white'}>
      <Row>
        {programs?.map((program) => (
          <ProgramCard
            id={program.id}
            faIcon={program.icon}
            title={program.title}
            description={program.description}
          />
        ))}
      </Row>
    </Section>
  );
};

export default Programs;
