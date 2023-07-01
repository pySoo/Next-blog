import { ReactNode, useMemo } from 'react';

import LinkExternal from '@/common/LinkExternal';
import { siteConfig } from '@/constants/config';

import HeaderNavigation from './HeaderNavigation';

export default function Layout({ children }: { children: ReactNode }) {
  const since = useMemo(() => {
    const year = new Date().getFullYear();
    if (siteConfig.since === year) {
      return year;
    }
    return `${siteConfig.since}-${year}`;
  }, []);

  return (
    <div className="mx-auto max-w-3xl px-6 lg:max-w-6xl lg:px-8 whitespace-pre-line">
      <HeaderNavigation />
      <main className="relative pb-16">{children}</main>
      <footer className="pb-8 text-sm text-neutral-800 dark:text-neutral-400">
        <div className="flex flex-col items-end space-y-1">
          <p>
            <span>© {since} </span>
            <LinkExternal href={siteConfig.author.contacts.github}>
              {siteConfig.title}
            </LinkExternal>
            <span> Powered by </span>
            <LinkExternal href="https://nextjs.org/">Next.js</LinkExternal>
            <span>, </span>
            <LinkExternal href="https://pages.github.com/">
              Github Pages
            </LinkExternal>
          </p>
        </div>
      </footer>
    </div>
  );
}
