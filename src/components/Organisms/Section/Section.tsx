import { SectionTitle } from '@components/Atoms/SectionTitle';
import clsx from 'clsx';
import { Container } from 'react-bootstrap';

import Style from './Section.module.scss';
import { SectionProps } from './Section.types';

const Section: SectionProps = ({ children, title, variant }) => {
  const titleVariant = variant === 'primary' ? 'white' : 'primary';

  return (
    <section
      className={clsx(
        Style.section,
        { [Style.primary]: variant === 'primary' },
        { [Style.white]: variant === 'white' }
      )}
    >
      <Container>
        <SectionTitle variant={titleVariant} title={title}></SectionTitle>
        {children}
      </Container>
    </section>
  );
};

export default Section;
