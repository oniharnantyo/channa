import { ProgramCard } from '@components/Molecules/ProgramCard';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import sal from 'sal.js';

import { Section } from '../Section';
import { programs } from './Programs.types';

const Programs = () => {
  useEffect(() => {
    sal();
  }, []);

  return (
    <Section title="Program Kerja Unggulan" variant="white">
      <Row className="gy-3 px-3 px-md-0">
        {programs?.map((program, i) => (
          <div
            key={program.id}
            className="col-md-4"
            data-sal="slide-right"
            data-sal-delay={i + 1 * 100}
            data-sal-duration={700}
            data-sal-easing="ease-in-out-quad"
          >
            <ProgramCard
              id={program.id}
              icon={program.icon}
              title={program.title}
              description={program.description}
            />
          </div>
        ))}
      </Row>
    </Section>
  );
};

export default Programs;
