import PlainText from '@/common/PlainText';
import Title from '@/common/Title';
import { PageSEO } from '@/components/SEO';
import Layout from '@/layouts/Layout';
import React from 'react';

export default function Home() {
  return (
    <Layout>
      <PageSEO title="Blog" description="블로그 설명입니다." url="/blog" />
      <Title>pySoo</Title>
      <PlainText>환영합니다.</PlainText>
    </Layout>
  );
}
