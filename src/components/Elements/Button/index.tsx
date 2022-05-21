import clsx from 'clsx';
import * as React from 'react';
import { Button } from 'react-bootstrap';

const variants = {
  primary: 'primary',
  outlinePrimary: 'outline-primary',
};

const sizes = {
  sm: 'sm',
  lg: 'lg',
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  rounded?: boolean;
};

export const StyledButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'lg', rounded = false, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant={variants[variant]}
        size={sizes[size] as 'sm' | 'lg'}
        className={clsx(className, { 'rounded-0': !rounded }, 'px-3', 'py-2', 'fw-bolder')}
        {...props}
      >
        <span>{props.children}</span>
      </Button>
    );
  }
);

StyledButton.displayName = 'Button';
