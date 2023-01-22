import { ProgramCard } from '@components/Molecules/ProgramCard';
import { motion } from 'framer-motion';
import { Col, Row } from 'react-bootstrap';

import { Section } from '../Section';
import { programs } from './Programs.types';

const Programs = () => {
  return (
    <Section title="Program Kerja Unggulan" variant="white">
      <Row className="gy-3 px-3 px-md-0">
        {programs?.map((program, i) => (
          <motion.div
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
              key={program.id}
              id={program.id}
              icon={program.icon}
              title={program.title}
              description={program.description}
            />
          </motion.div>
        ))}
      </Row>
    </Section>
  );
};

export default Programs;
