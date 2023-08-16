import { AnimationProps, motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedContainerProps extends AnimationProps {
  as?: keyof JSX.IntrinsicElements;
  variants: Variants;
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
  variants,
  className,
  useTransition,
  children,
  ...props
}: AnimatedContainerProps) {
  const Container = motion[as as keyof typeof motion];

  return (
    <Container
      className={className}
      variants={variants}
      {...(useTransition ? defaultMotionProps : {})}
      {...props}
    >
      {children}
    </Container>
  );
}
