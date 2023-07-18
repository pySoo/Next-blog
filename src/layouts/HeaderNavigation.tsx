import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import LogoIcon from '@/common/LogoIcon';
import SearchInput from '@/common/SearchInput';
import ThemeSwitch from '@/components/ThemeSwitch';
import { siteConfig } from '@/constants/config';
import { $ } from '@/libs/core';

import NavItem from '../common/NavItem';

export default function HeaderNavigation() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = '/' + router.asPath.split('/')[1].split('?')[0] ?? '';

  const currentSiteMenu = siteConfig.menus.filter(
    (item) => item.path === currentPath,
  );

  const isActiveNav = (navPath: string) => {
    if (navPath === '/') return router.asPath === navPath;

    return router.asPath.startsWith(navPath);
  };

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.classList.remove('overflow-hidden');
    } else {
      setIsMenuOpen(true);
      document.body.classList.add('overflow-hidden');
    }
  };

  useEffect(() => {
    return function cleanup() {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <nav className="text-secondary flex w-full select-none items-end pt-8 pb-9 sm:pb-12">
      <div className="hidden items-end sm:flex">
        <NavItem href="/" className="mr-2" aria-label="logo">
          <LogoIcon />
        </NavItem>
        {siteConfig.menus.map((link) => (
          <NavItem key={link.label} href={link.path} className="px-3 py-1.5">
            {link.label}
          </NavItem>
        ))}
      </div>
      <div className="flex sm:hidden">
        <div
          className="rounded-lg transition-all hover:bg-secondary"
          onClick={toggleMenu}
        >
          <LogoIcon />
        </div>
        {currentSiteMenu.map((link) => (
          <NavItem key={link.label} href={link.path}>
            <span className="px-2">{link.label}</span>
          </NavItem>
        ))}
        <div
          className={$(
            'transition-transform sm:translate-x-0 bg-primary absolute inset-x-0 top-[108px] -bottom-4 z-50 flex flex-col px-6 transition-all',
            isMenuOpen ? 'opacity-100' : 'opacity-0 -translate-x-full',
          )}
        >
          {[...siteConfig.menus].map((link, i) => (
            <Link
              key={link.label}
              href={link.path}
              className={$(
                'border-b border-neutral-200 py-4 font-semibold transition-all dark:border-neutral-700',
                isMenuOpen
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-4 opacity-0',
                isActiveNav(link.path) ? 'text-yellow-400' : 'text-primary',
              )}
              style={{ transitionDelay: `${150 + i * 25}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="ml-auto flex items-center gap-2">
        <SearchInput placeholder="Search..." />
        <ThemeSwitch />
      </div>
    </nav>
  );
}
