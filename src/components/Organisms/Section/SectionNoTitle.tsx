import clsx from 'clsx';
import { Container } from 'react-bootstrap';

import Style from './Section.module.scss';
import { SectionNoTitleProps } from './Section.types';

const SectionNoTitle: SectionNoTitleProps = ({ children, variant }) => {
  return (
    <>
      <section
        className={clsx(
          Style.section,
          { [Style.primary]: variant === 'primary' },
          { [Style.white]: variant === 'white' }
        )}
      >
        <Container>{children}</Container>
      </section>
    </>
  );
};

export default SectionNoTitle;
