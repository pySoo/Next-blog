import { useMemo } from 'react';

import { siteConfig } from '@/constants/config';

import AuthorContacts from '../AuthorContacts';
import LinkExternal from './LinkExternal';

export default function SiteFooter() {
  const since = useMemo(() => {
    const year = new Date().getFullYear();
    if (siteConfig.since === year) {
      return year;
    }
    return `${siteConfig.since}-${year}`;
  }, []);

  return (
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
  );
}
