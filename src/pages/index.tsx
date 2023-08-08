import React from 'react';

import FeaturedPosts from '@/components/home/FeaturedPosts';
import IntroduceInfo from '@/components/home/IntroduceInfo';
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
