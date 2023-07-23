import { hasTouch } from 'detect-touch';
import { motion } from 'framer-motion';
import { MouseEvent, TouchEvent, useRef, useState } from 'react';

interface PressedEffectProps {
  children: React.ReactNode;
  className?: string;
  disable?: boolean;
  action?: () => void;
}

export default function PressedEffect({
  children,
  className,
  disable = false,
  action,
}: PressedEffectProps) {
  const [buttonDown, setButtonDown] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);

  const pressedRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!hasTouch) {
      e.preventDefault();
      e.stopPropagation();
      setButtonDown(true);
    }
  };
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (!hasTouch) {
      if (!disable && action) {
        e.preventDefault();
        e.stopPropagation();
        action();
      }
    }
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchStartY(e.changedTouches[0].clientY);
    setTouchStartX(e.changedTouches[0].clientX);
    if (!disable) {
      if (e.cancelable) e.preventDefault();
      e.stopPropagation();
      setButtonDown(true);
    }
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (
      Math.abs(e.changedTouches[0].clientY - touchStartY) > 0 ||
      Math.abs(e.changedTouches[0].clientX - touchStartX) > 0
    ) {
      setButtonDown(false);
    }
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    setButtonDown(false);

    if (
      !(
        Math.abs(e.changedTouches[0].clientY - touchStartY) > 5 ||
        Math.abs(e.changedTouches[0].clientX - touchStartX) > 5
      )
    ) {
      if (!disable && action) {
        if (e.cancelable) e.preventDefault();
        e.stopPropagation();
        action();
      }
    }
  };

  return (
    <motion.div
      animate={{ scale: buttonDown && !disable ? 0.95 : 1 }}
      transition={{ duration: 0.2 }}
      className={`w-full h-full  ${className} `}
      ref={pressedRef}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </motion.div>
  );
}
