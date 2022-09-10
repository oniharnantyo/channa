import BackgroundStyle from '@styles/Background.module.css';
import ColorStyle from '@styles/Color.module.css';
import clsx from 'clsx';
import { Container } from 'react-bootstrap';

import Style from './Section.module.css';
import { SectionNoTitleProps } from './Section.types';

const SectionNoTitle: SectionNoTitleProps = ({ children, variant }) => {
  let backgroundColor = '';
  let color = '';

  if (variant !== '') {
    backgroundColor = variant === 'primary' ? BackgroundStyle.blue : BackgroundStyle.white;
    color = variant === 'primary' ? ColorStyle.white : ColorStyle.blue;
  }

  return (
    <section
      className={clsx(
        Style.section,
        [backgroundColor !== '', backgroundColor],
        [color !== '', color]
      )}
    >
      <Container>{children}</Container>
    </section>
  );
};

export default SectionNoTitle;
