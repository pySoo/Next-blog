import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import LogoIcon from '@/common/LogoIcon';
import { siteConfig } from '@/constants/config';
import NavItem from '../common/NavItem';

export default function HeaderNav() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.classList.remove('overflow-hidden');
    } else {
      setIsMenuOpen(true);
      document.body.classList.add('overflow-hidden');
    }
  };

  const isActiveNav = (navPath: string) => {
    if (navPath === '/') return router.asPath === navPath;

    return router.asPath.startsWith(navPath);
  };

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
