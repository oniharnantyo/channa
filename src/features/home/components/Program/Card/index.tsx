import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col } from 'react-bootstrap';

import ColorStyle from '@/styles/Color.module.css';

import Style from './Card.module.css';

type cardProps = {
  faIcon: IconProp;
  title: string;
  description: string;
};

export const Card = ({ faIcon, title, description }: cardProps) => {
  return (
    <Col md={6} lg={4}>
      <Col md={12} className={`${Style.card} mb-4 mb-lg-4`}>
        <div className={`${Style.content} d-block`}>
          <div className={`${Style.icon} mb-3`}>
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
