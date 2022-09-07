import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ColorStyle from '@styles/Color.module.css';
import clsx from 'clsx';
import { Col } from 'react-bootstrap';

import Style from './ProgramCard.module.css';
import { ProgramCardProps } from './ProgramCard.types';

const ProgramCard: ProgramCardProps = ({ id, faIcon, title, description }) => {
  return (
    <Col key={id} md={6} lg={4}>
      <Col md={12} className={clsx(Style.card, 'mb-4', 'mb-lg-4')}>
        <div className={clsx(Style.content, 'd-block')}>
          <div className={clsx(Style.icon, 'mb-3')}>
            <FontAwesomeIcon icon={faIcon} className={ColorStyle.primary}></FontAwesomeIcon>
          </div>
          <div>
            <h3 className={ColorStyle.primary}>{title}</h3>
            <p className={ColorStyle.primaryLighter}>{description}</p>
          </div>
        </div>
      </Col>
    </Col>
  );
};

export default ProgramCard;
