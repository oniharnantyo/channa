import clsx from 'clsx';
import React from 'react';
import { Button } from 'react-bootstrap';

import { StyledButtonProps, sizes, variants } from './StyledButton.types';

const StyledButton: StyledButtonProps = React.forwardRef(
  ({ onClick, href, value, variant, size, rounded }, ref) => {
    return (
      <Button
        href={href}
        variant={variant}
        size={size}
        className={clsx({ 'rounded-0': !rounded }, 'px-3', 'py-2', 'fw-bolder')}
        onClick={onClick}
        ref={ref}
      >
        <span>{value}</span>
      </Button>
    );
  }
);

export default StyledButton;
