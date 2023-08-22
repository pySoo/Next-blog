import { GetStaticPaths, GetStaticProps } from 'next';

import { PostNavigationProps } from '@/components/post/PostNavigation';
import PostLayout, { PostLayoutProps } from '@/layouts/PostLayout';
import { allBlogPosts, allSeries } from '@/libs/dataset';
import { parseContents } from '@/libs/mdx';
import { Series } from '@/types/post';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allBlogPosts.map((post) => post.slug),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slugs } = params as { slugs: string[] };
  const slug = `/blog/${[...slugs].join('/')}`;

  const post = allBlogPosts.find((v) => v.slug === slug);
  const postIndex = allBlogPosts.findIndex((v) => v.slug === slug);

  if (!post || postIndex < 0) {
    return {
      notFound: true,
    };
  }

  const postNavigation: PostNavigationProps = {
    prevPost: allBlogPosts.at(postIndex + 1) ?? null,
    nextPost: postIndex === 0 ? null : allBlogPosts.at(postIndex - 1) ?? null,
  };

  let series: Series | null = null;

  if (post.seriesName) {
    series =
      allSeries.find((series) =>
        series.slug.startsWith(`/blog/${post.seriesName}`),
      ) ?? null;
  }

  const props: PostLayoutProps = {
    post,
    series,
    postNavigation,
    tableOfContents: parseContents(post.body.raw),
  };

  return {
    props,
  };
};

export default function PostPage(props: PostLayoutProps) {
  return <PostLayout {...props} />;
}
