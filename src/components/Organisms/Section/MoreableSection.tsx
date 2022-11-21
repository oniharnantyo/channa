import Link from 'next/link';

import clsx from 'clsx';
import { Col, Row } from 'react-bootstrap';

import Section from './Section';
import Style from './Section.module.scss';
import { MoreableSectionProps } from './Section.types';

const MoreableSection: MoreableSectionProps = ({ title, variant, children, link, linkTitle }) => {
  return (
    <Section title={title} variant={variant}>
      {children}
      <Row>
        <Col md={12} className={clsx(Style.more, 'mt-md-4')}>
          <Link href={link}>
            <a className="float-end">{linkTitle}</a>
          </Link>
        </Col>
      </Row>
    </Section>
  );
};

export default MoreableSection;
