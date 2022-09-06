import { SectionTitle } from '@components/Atoms/SectionTitle';
import BackgroundStyle from '@styles/Background.module.css';
import ColorStyle from '@styles/Color.module.css';
import clsx from 'clsx';
import { Container, Row } from 'react-bootstrap';

import Style from './Section.module.css';
import { SectionProps } from './Section.types';

const Section: SectionProps = ({ children, title, variant }) => {
  const titleVariant = variant === 'primary' ? 'white' : 'primary';
  const backgroundColor = variant === 'primary' ? BackgroundStyle.blue : BackgroundStyle.white;
  const color = variant === 'primary' ? ColorStyle.white : ColorStyle.blue;

  return (
    <section className={clsx(Style.section, backgroundColor, color)}>
      <Container>
        <SectionTitle variant={titleVariant} title={title}></SectionTitle>
        {children}
      </Container>
    </section>
  );
};

export default Section;
