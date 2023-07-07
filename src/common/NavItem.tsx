import { useRouter } from 'next/router';

import { $ } from '@/libs/core';

import LinkHover from './LinkHover';

export default function NavItem({
  href,
  children,
  className,
  ...props
}: React.ComponentProps<'a'>) {
  const router = useRouter();
  const currentPath = '/' + router.asPath.split('/')[1].split('?')[0] ?? '';
  const isActive = href === currentPath;

  return (
    <LinkHover
      {...props}
      href={href ?? undefined}
      className={$(
        isActive ? 'text-primary font-semibold' : 'text-secondary font-normal',
        className,
      )}
    >
      {children}
    </LinkHover>
  );
}
