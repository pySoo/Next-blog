import React from 'react';

import { $ } from '@/libs/core';

export interface IconTextProps extends React.ComponentProps<'div'> {
  Icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
  iconSize?: number;
  text?: React.ReactNode;
  className?: string;
}

export default function IconText({
  Icon,
  iconSize = 14,
  text,
  className,
  ...props
}: IconTextProps) {
  return (
    <div
      className={$('flex items-center', className ?? 'gap-1 text-xs')}
      {...props}
    >
      <Icon width={iconSize} height={iconSize} />
      <span>{text}</span>
    </div>
  );
}
