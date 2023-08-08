import { ReactNode } from 'react';

import HeaderNavigation from '@/components/common/HeaderNavigation';
import SiteFooter from '@/components/common/SiteFooter';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl px-6 lg:max-w-6xl lg:px-8">
      <HeaderNavigation />
      <main className="relative pb-16">{children}</main>
      <SiteFooter />
    </div>
  );
}
