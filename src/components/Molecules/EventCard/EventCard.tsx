import Link from 'next/link';

import { Label } from '@components/Atoms/Label';
import { LinkImage } from '@components/Atoms/LinkImage';
import { LinkTitle } from '@components/Atoms/LinkTitle';
import { StyledButton } from '@components/Atoms/StyledButton';
import { faCalendarAlt, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import BackgroundStyle from '@styles/Background.module.css';
import { formatDate } from '@utils/format';
import clsx from 'clsx';
import { Col } from 'react-bootstrap';

import Style from './EventCard.module.css';
import { EventCardProps } from './EventCard.types';

const EventCard: EventCardProps = ({ slug, title, imageUrl, imageAlt, location, createdAt }) => {
  const date = formatDate(createdAt, 'DD MMMM YYYY');
  const time = formatDate(createdAt, 'HH:MM');
  const url = '/acara/' + slug;

  return (
    <Col md={4} key={slug}>
      <Col md={12} className={clsx(Style.card, BackgroundStyle.white, 'mb-4', 'mb-lg-4')}>
        <div className="d-block">
          <LinkImage
            imageUrl={imageUrl}
            imageAlt={imageAlt}
            url={url}
            width={'300'}
            height={'300'}
          />
          <LinkTitle url={url} title={title} />
          <Label variant="primary" icon={faCalendarAlt} label={date} />
          <Label variant="primary" icon={faClock} label={time} />
          <Label variant="primary" icon={faMapMarkerAlt} label={location} />
          <div className="mt-2">
            <Link href={url}>
              <StyledButton variant="outline-primary" size="sm">
                Detail Acara
              </StyledButton>
            </Link>
          </div>
        </div>
      </Col>
    </Col>
  );
};

export default EventCard;
