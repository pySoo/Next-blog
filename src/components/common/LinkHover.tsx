import { $ } from '@/libs/core';

export default function LinkHover({
  ref: _,
  className,
  href,
  children,
  ...props
}: React.ComponentProps<'a'>) {
  return (
    <a
      {...props}
      href={href ?? undefined}
      className={$(
        'flex items-center rounded-lg transition-all hover:bg-secondary',
        className,
      )}
    >
      {children}
    </a>
  );
}
