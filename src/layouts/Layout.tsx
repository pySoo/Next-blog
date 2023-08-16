import { ReactNode } from 'react';

import { AnimatedContainer, PlainText, Title } from '@/components/common';
import HeaderNavigation from '@/components/common/HeaderNavigation';
import SiteFooter from '@/components/common/SiteFooter';
import { fadeInHalf, staggerHalf } from '@/constants/animations';

type LayoutProps = {
  title: string;
  description?: string | ReactNode;
  children: ReactNode;
};

export default function Layout({ title, description, children }: LayoutProps) {
  return (
    <div className="mx-auto max-w-3xl px-6 lg:max-w-6xl lg:px-8">
      <HeaderNavigation />
      <main className="relative pb-16">
        <Title>{title}</Title>
        <AnimatedContainer variants={staggerHalf} useTransition>
          {description && (
            <AnimatedContainer variants={fadeInHalf}>
              {typeof description === 'string' ? (
                <PlainText>{description}</PlainText>
              ) : (
                description
              )}
            </AnimatedContainer>
          )}
          {children}
        </AnimatedContainer>
      </main>
      <SiteFooter />
    </div>
  );
}
