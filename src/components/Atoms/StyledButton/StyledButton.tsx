import clsx from 'clsx';
import React from 'react';
import { Button } from 'react-bootstrap';

import { StyledButtonProps } from './StyledButton.types';

const StyledButton: StyledButtonProps = React.forwardRef(
  ({ onClick, href, variant, size, rounded, className, children }, ref) => {
    return (
      <Button
        href={href}
        variant={variant}
        size={size}
        className={clsx({ 'rounded-0': !rounded }, 'px-4', 'py-2', 'fw-bolder', className)}
        onClick={onClick}
      >
        <span>{children}</span>
      </Button>
    );
  }
);

export default StyledButton;
