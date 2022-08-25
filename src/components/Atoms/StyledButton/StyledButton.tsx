import classNames from 'classnames';
import { Button } from 'react-bootstrap';

import { StyledButtonProps, sizes, variants } from './StyledButton.types';

const StyledButton: StyledButtonProps = ({ onClick, value, variant, size, rounded }) => {
  return (
    <Button
      variant={variants[variant]}
      size={sizes[size] as 'sm' | 'lg'}
      className={classNames({ 'rounded-0': !rounded }, 'px-3', 'py-2', 'fw-bolder')}
      onClick={onClick}
    >
      <span>{value}</span>
    </Button>
  );
};

export default StyledButton;
