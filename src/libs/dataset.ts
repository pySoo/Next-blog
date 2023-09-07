import { allPosts } from 'contentlayer/generated';

import { defaultCoverImage } from '@/constants/image';
import { Post, PostPressedCardType, Series } from '@/types/post';

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
    snippetName: snippet.slug.split('/')[2] ?? null,
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

export const allFeaturedPosts: PostPressedCardType[] = [
  {
    href: '/blog/nextjs/2-lighthouse',
    imgUrl: '/posts/2-lighthouse/cover.png',
    title: '웹 성능 개선에 필요한 Lighthouse 지표 알아보기',
    date: '2023.09.07',
  },
  {
    href: '/blog/frontend/8-monorepo',
    imgUrl: '/posts/8-monorepo/cover.png',
    title: 'yarn workspace와 모노레포 구축 여정 🏃🏼‍♂️',
    date: '2023.09.05',
  },
  {
    href: '/blog/nextjs/1-ssr-ssg-isr',
    imgUrl: '/posts/1-ssr-ssg-isr/cover.png',
    title: 'Next.js의 렌더링 방식 이해하기 (SSR, SSG, ISR)',
    date: '2023.08.21',
  },
  {
    href: '/blog/frontend/4-module-bundler',
    imgUrl: '/posts/4-module-bundler/230824-203200.png',
    title: '모듈 번들러란? (Webpack vs Vite 무엇을 써야 할까요?)',
    date: '2023.08.18',
  },
];
