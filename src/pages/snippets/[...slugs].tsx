import { GetStaticPaths, GetStaticProps } from 'next';

import { PostNavigationProps } from '@/components/post/PostNavigation';
import PostLayout, { PostLayoutProps } from '@/layouts/PostLayout';
import { allSnippets } from '@/libs/dataset';
import { parseContents } from '@/libs/mdx';

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: allSnippets
      .filter((post) => post.snippetName)
      .map((post) => post.slug),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slugs } = params as { slugs: string[] };
  const slug = `/snippets/${[...slugs].join('/')}`;

  const post = allSnippets.find((v) => v.slug === slug);
  const postIndex = allSnippets.findIndex((v) => v.slug === slug);

  if (!post || postIndex === -1) {
    return {
      notFound: true,
    };
  }

  const postNavigation: PostNavigationProps = {
    prevPost: postIndex > 0 ? allSnippets.at(postIndex - 1) ?? null : null,
    nextPost: allSnippets.at(postIndex + 1) ?? null,
  };

  const tableOfContents = parseContents(post.body.raw);

  const props: PostLayoutProps = {
    post,
    postNavigation,
    tableOfContents,
  };

  return { props };
};

export default function PostPage({ ...postLayoutProps }: PostLayoutProps) {
  return <PostLayout {...postLayoutProps} />;
}
