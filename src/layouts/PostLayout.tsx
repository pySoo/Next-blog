import { ReadingProgressBar } from '@/components/contents';
import { PostContent, PostFooter, PostHeader } from '@/components/post';
import { PostNavigationProps } from '@/components/post/PostNavigation';
import { BlogSEO } from '@/components/SEO';
import SeriesCard from '@/components/series/SeriesCard';
import { Post, Series, TableOfContents } from '@/types/post';

import Layout from './Layout';

export type PostLayoutProps = {
  post: Post;
  series?: Series | null;
  postNavigation: PostNavigationProps;
  tableOfContents: TableOfContents;
};

export default function PostLayout({
  post,
  series,
  postNavigation,
  tableOfContents,
}: PostLayoutProps) {
  return (
    <Layout>
      <BlogSEO {...post} url={post.slug} summary={post.description} />
      <ReadingProgressBar />
      <PostHeader post={post} series={series} />
      <PostContent post={post} tableOfContents={tableOfContents} />
      {series && <SeriesCard currentPost={post} series={series} />}
      <PostFooter post={post} postNavigation={postNavigation} />
    </Layout>
  );
}
