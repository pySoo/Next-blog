import { $ } from '@/libs/core';

export default function SubTitle({
  className,
  ...props
}: React.ComponentProps<'h2'>) {
  return (
    <h2
      {...props}
      className={$('text-2xl font-bold tracking-tight md:text-4xl', className)}
    >
      {props.children}
    </h2>
  );
}
