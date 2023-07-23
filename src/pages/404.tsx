import { NavItem, Title } from '@/components/common';
import { PageSEO } from '@/components/SEO';
import Layout from '@/layouts/Layout';

export default function NotFound() {
  return (
    <Layout>
      <PageSEO title="404" />
      <div className="mb-16">
        <Title>404</Title>
        <p className="text-secondary mb-8">찾을 수 없는 페이지입니다. 🥲</p>

        <NavItem
          href="/blog"
          className="rounded-md px-4 py-2 ring-1 ring-neutral-400/70"
        >
          블로그로 돌아가기
        </NavItem>
      </div>
    </Layout>
  );
}
