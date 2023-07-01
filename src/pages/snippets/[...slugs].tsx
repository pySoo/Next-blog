import { GetStaticPaths, GetStaticProps } from 'next';

import { PostNavigationProps } from '@/components/PostNavigation';
import PostDetailLayout, {
  PostDetailLayoutProps,
} from '@/layouts/PostDetailLayout';
import { allSnippets } from '@/libs/dataset';

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

  const props: PostDetailLayoutProps = {
    post,
    postNavigation,
  };

  return { props };
};

export default function PostPage({
  ...postLayoutProps
}: PostDetailLayoutProps) {
  return <PostDetailLayout {...postLayoutProps} />;
}
