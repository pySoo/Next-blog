import { allPosts } from 'contentlayer/generated';

import { Post } from '@/types/post';

import { reducePost } from './post';

export const allBlogPosts: Post[] = allPosts.filter(
  (post) =>
    !post.draft &&
    post._raw.sourceFilePath.includes('blog') &&
    !post._raw.sourceFilePath.includes('/index.mdx'),
);

export const allSnippets: Post[] = allPosts
  .filter((post) => post._raw.sourceFilePath.includes('snippets'))
  .map((snippet) => ({
    ...snippet,
    snippetName: snippet.slug.split('/').at(2) ?? null,
  }))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const reducedAllSnippets = allSnippets.map(reducePost);
