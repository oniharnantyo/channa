import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

import Style from './Label.module.scss';
import { LabelProps } from './Label.types';

const Label: LabelProps = ({ icon, label, variant, size = 'sm', isBolderText, url }) => {
  return (
    <p
      className={clsx(
        Style.label,
        { [Style.primary]: variant === 'primary' },
        { [Style.white]: variant === 'white' },
        { [Style.large]: size === 'lg' },
        { ['fw-bolder']: isBolderText }
      )}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      {url ? (
        <a href={url} target="_blank" rel="noreferrer" className="text-primary">
          {label}
        </a>
      ) : (
        label
      )}
    </p>
  );
};

export default Label;
