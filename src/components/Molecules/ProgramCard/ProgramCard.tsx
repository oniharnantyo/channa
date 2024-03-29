import LogoImage from '@components/Atoms/Image/LogoImage';
import clsx from 'clsx';
import { Card } from 'react-bootstrap';

import Style from './ProgramCard.module.scss';
import { ProgramCardProps } from './ProgramCard.types';

const ProgramCard: ProgramCardProps = ({ id, icon, title, description }) => {
  return (
    <Card key={id} className={clsx(Style.card, 'h-100', 'p-2')}>
      <div className={clsx(Style.icon, 'px-3', 'pt-2')}>
        <LogoImage logo={icon} alt={'icon ' + title} width={40} height={40} />
      </div>
      <Card.Body className={Style.content}>
        <h3 className="text-dark fw-bold" style={{ fontSize: '1.5rem' }}>
          {title}
        </h3>
        <p className="text-dark">{description}</p>
      </Card.Body>
    </Card>
  );
};

export default ProgramCard;
