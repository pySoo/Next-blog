import { allPosts } from 'contentlayer/generated';

import { Post } from '@/types/post';

export const allBlogPosts: Post[] = allPosts.filter(
  (post) =>
    !post.draft &&
    post._raw.sourceFilePath.includes('blog') &&
    !post._raw.sourceFilePath.includes('/index.mdx'),
);
