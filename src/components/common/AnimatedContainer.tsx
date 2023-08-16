import { AnimationProps, motion, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedContainerProps extends AnimationProps, MotionProps {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  useTransition?: boolean;
  children: ReactNode;
}

const defaultMotionProps = {
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
};

export default function AnimatedContainer({
  as = 'div',
  className,
  useTransition,
  children,
  ...props
}: AnimatedContainerProps) {
  const Container = motion[as as keyof typeof motion];

  return (
    <Container
      className={className}
      {...(useTransition ? defaultMotionProps : {})}
      {...props}
    >
      {children}
    </Container>
  );
}
