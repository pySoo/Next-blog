import { FeaturedPosts, IntroduceDescription } from '@/components/home';
import { PageSEO } from '@/components/SEO';
import { siteConfig } from '@/constants/config';
import Layout from '@/layouts/Layout';

export default function Home() {
  return (
    <Layout title={siteConfig.title} description={<IntroduceDescription />}>
      <PageSEO url="/" />
      <FeaturedPosts />
    </Layout>
  );
}
