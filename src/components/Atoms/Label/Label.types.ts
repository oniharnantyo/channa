import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FC } from 'react';

export declare type variants = 'primary' | 'white' | string;

export declare type size = 'sm' | 'lg' | string;

interface ILabelProps {
  variant: variants;
  size?: size;
  icon?: IconProp;
  label: string;
}

export type LabelProps = FC<ILabelProps>;
