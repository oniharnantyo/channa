import Link from 'next/link';

import ColorStyle from '@styles/Color.module.css';
import clsx from 'clsx';
import { Col, Row } from 'react-bootstrap';

import Section from './Section';
import Style from './Section.module.css';
import { MoreableSectionProps } from './Section.types';

const MoreableSection: MoreableSectionProps = ({ title, variant, children, link, linkTitle }) => {
  return (
    <Section title={title} variant={variant}>
      {children}
      <Row>
        <Col md={12} className={clsx(Style.more, 'mt-md-4')}>
          <Link href={link}>
            <a className={`${ColorStyle.white} float-end`}>{linkTitle}</a>
          </Link>
        </Col>
      </Row>
    </Section>
  );
};

export default MoreableSection;
