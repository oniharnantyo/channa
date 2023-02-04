import { ProgramCard } from '@components/Molecules/ProgramCard';
import LazyMotionDomAnimation from '@lib/framer';
import { m } from 'framer-motion';
import { Row } from 'react-bootstrap';

import { Section } from '../Section';
import { programs } from './Programs.types';

const Programs = () => {
  return (
    <Section title="Program Kerja Unggulan" variant="white">
      <Row className="gy-3 px-3 px-md-0">
        <LazyMotionDomAnimation>
          {programs?.map((program, i) => (
            <m.div
              key={program.id}
              className="col-md-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <ProgramCard
                id={program.id}
                icon={program.icon}
                title={program.title}
                description={program.description}
              />
            </m.div>
          ))}
        </LazyMotionDomAnimation>
      </Row>
    </Section>
  );
};

export default Programs;
