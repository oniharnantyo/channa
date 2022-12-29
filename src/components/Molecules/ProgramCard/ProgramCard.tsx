import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { Col } from 'react-bootstrap';

import Style from './ProgramCard.module.scss';
import { ProgramCardProps } from './ProgramCard.types';

const ProgramCard: ProgramCardProps = ({ key, faIcon, title, description }) => {
  return (
    <motion.div
      className="col-md-6 col-lg-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: key * 0.1, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <Col md={12} className={clsx(Style.card, 'mb-4', 'mb-lg-4')}>
        <div className={clsx(Style.content, 'd-block')}>
          <div className={clsx(Style.icon, 'mb-3')}>
            <FontAwesomeIcon icon={faIcon}></FontAwesomeIcon>
          </div>
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </Col>
    </motion.div>
  );
};

export default ProgramCard;
