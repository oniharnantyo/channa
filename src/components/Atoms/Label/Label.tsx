import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ColorStyle from '@styles/Color.module.css';
import clsx from 'clsx';

import Style from './Label.module.css';
import { LabelProps } from './Label.types';

const Label: LabelProps = ({ icon, label, variant, size = 'sm' }) => {
  return (
    <p
      className={clsx(
        Style.label,
        { [ColorStyle.primary]: variant === 'primary' },
        { [ColorStyle.white]: variant === 'white' },
        { [Style.large]: size === 'lg' }
      )}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      {label}
    </p>
  );
};

export default Label;
