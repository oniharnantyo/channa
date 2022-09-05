import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FC } from 'react';

export declare type variants = 'primary' | 'white' | string;

interface ILabelProps {
  variant: variants;
  icon: IconProp;
  label: string;
}

export type LabelProps = FC<ILabelProps>;
