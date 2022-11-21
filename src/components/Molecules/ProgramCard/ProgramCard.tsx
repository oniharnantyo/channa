import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { Col } from 'react-bootstrap';

import Style from './ProgramCard.module.scss';
import { ProgramCardProps } from './ProgramCard.types';

const ProgramCard: ProgramCardProps = ({ faIcon, title, description }) => {
  return (
    <Col md={6} lg={4}>
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
    </Col>
  );
};

export default ProgramCard;
