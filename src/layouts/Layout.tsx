import { ReactNode, useMemo } from 'react';

import LinkExternal from '@/common/LinkExternal';
import AuthorContacts from '@/components/AuthorContacts';
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
    <div className="mx-auto max-w-3xl px-6 lg:max-w-6xl lg:px-8">
      <HeaderNavigation />
      <main className="relative pb-16">{children}</main>
      <footer className="pb-8 text-sm text-neutral-800 dark:text-neutral-400">
        <div className="flex flex-col items-end space-y-1">
          <AuthorContacts />
          <p>
            <span>
              © {since} {siteConfig.title}
            </span>
            <span> Powered by </span>
            <LinkExternal href="https://nextjs.org/">Next.js</LinkExternal>
            <span>, </span>
            <LinkExternal href="https://vercel.com/">Vercel</LinkExternal>
          </p>
        </div>
      </footer>
    </div>
  );
}
