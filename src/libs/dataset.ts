import { allPosts } from 'contentlayer/generated';

import { PostCardType } from '@/components/PostCard';
import { defaultCoverImage } from '@/constants/image';
import { Post, Series } from '@/types/post';

import { reducePost } from './post';

export const allSeriesName = allPosts
  .filter((post) => post._raw.sourceFilePath.includes('/index.mdx'))
  .map((post) => post.slug.split('/')[2]);

export const allBlogPosts: Post[] = allPosts
  .filter(
    (post) =>
      !post.draft &&
      post._raw.sourceFilePath.includes('blog') &&
      !post._raw.sourceFilePath.includes('/index.mdx'),
  )
  .map((post) => ({
    ...post,
    image: post.image ? post.image : defaultCoverImage,
    seriesName:
      allSeriesName.find((seriesName) => post.slug.includes(seriesName)) ??
      null,
  }))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const allSnippets: Post[] = allPosts
  .filter((post) => post._raw.sourceFilePath.includes('snippets'))
  .map((snippet) => ({
    ...snippet,
    snippetName: snippet.slug.split('/').at(2) ?? null,
  }))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const reducedAllSnippets = allSnippets.map(reducePost);

export const allSeries: Series[] = allPosts
  .filter((post) => post._raw.sourceFilePath.includes('/index.mdx'))
  .map((series) => ({
    ...series,
    seriesName: series.slug.split('/')[2],
    posts: allBlogPosts
      .filter((post) => series.slug.includes(post.seriesName ?? 'none'))
      .map(reducePost)
      .reverse(),
  }))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const allFeaturedPosts: PostCardType[] = [
  {
    href: '/blog/frontend/1-dom',
    imgUrl: '/posts/1-dom/cover.png',
    title: '웹을 이루는 핵심 요소를 알아봅시다! (DOM, BOM, JavaScript)',
    date: '2023.07.06',
  },
  {
    href: '/blog/javascript/1-var',
    imgUrl: '/posts/1-var/cover.png',
    title: 'var 모르고 쓰면 큰일납니다.',
    date: '2023.07.06',
  },
  {
    href: '',
    imgUrl: '/images/samples/draft-cover.png',
    title: '(공개 예정) Next.js의 SSR, SSG, ISR 이해하기 ',
    date: '',
    isDraft: true,
  },
  {
    href: '',
    imgUrl: '/images/samples/draft3.png',
    title: '(공개 예정) Critical Rendering Path',
    date: '',
    isDraft: true,
  },
];
