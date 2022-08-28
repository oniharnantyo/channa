import classNames from 'classnames';
import React from 'react';
import { Button } from 'react-bootstrap';

import { StyledButtonProps, sizes, variants } from './StyledButton.types';

const StyledButton: StyledButtonProps = React.forwardRef(
  ({ onClick, value, variant, size, rounded, href }, ref) => {
    return (
      <Button
        href={href}
        variant={variants[variant]}
        size={sizes[size] as 'sm' | 'lg'}
        className={classNames({ 'rounded-0': !rounded }, 'px-3', 'py-2', 'fw-bolder')}
        onClick={onClick}
        ref={ref}
      >
        <span>{value}</span>
      </Button>
    );
  }
);

export default StyledButton;
