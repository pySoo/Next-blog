import { useEffect } from 'react';

import LogoIcon from '@/common/LogoIcon';
import { siteConfig } from '@/constants/config';

import NavItem from '../common/NavItem';

export default function HeaderNavigation() {
  useEffect(() => {
    return function cleanup() {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <nav className="text-secondary flex w-full select-none items-end pt-8 pb-12">
      <div className="hidden items-end sm:flex">
        <NavItem href="/" className="mr-2" aria-label="logo">
          <LogoIcon width={40} />
        </NavItem>
        {siteConfig.menus.map((link) => (
          <NavItem key={link.label} href={link.path} className="px-3 py-1.5">
            {link.label}
          </NavItem>
        ))}
      </div>
    </nav>
  );
}
