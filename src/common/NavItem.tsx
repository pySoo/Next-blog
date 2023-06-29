import { useRouter } from 'next/router';

import { $ } from '@/libs/core';

export default function NavItem({
  href,
  children,
  className,
  ...props
}: React.ComponentProps<'a'>) {
  const router = useRouter();
  const isActive = router.asPath.startsWith(href ?? '/');

  return (
    <a
      {...props}
      href={href}
      className={$(
        isActive ? 'text-primary font-semibold' : 'text-secondary font-normal',
        className,
      )}
    >
      {children}
    </a>
  );
}
