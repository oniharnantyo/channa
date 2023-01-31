import { LazyMotion, domAnimation } from 'framer-motion';
import { FC, ReactNode } from 'react';

interface ILazyMotionDomAnimationProps {
  children: ReactNode;
}

type LazyMotionDomAnimationProps = FC<ILazyMotionDomAnimationProps>;

const LazyMotionDomAnimation: LazyMotionDomAnimationProps = ({ children }) => {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
};

export default LazyMotionDomAnimation;
