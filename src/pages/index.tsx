import React from 'react';

import { FeaturedPosts, IntroduceInfo } from '@/components/home';
import { PageSEO } from '@/components/SEO';
import Layout from '@/layouts/Layout';

export default function Home() {
  return (
    <Layout>
      <PageSEO url="/" />
      <IntroduceInfo />
      <FeaturedPosts />
    </Layout>
  );
}
