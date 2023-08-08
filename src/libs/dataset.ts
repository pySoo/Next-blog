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
    href: '/blog/frontend/3-reflow-repaint',
    imgUrl: '/posts/3-reflow-repaint/cover.png',
    title: '브라우저 렌더링 최적화 (Reflow, Repaint)',
    date: '2023.07.26',
  },
  {
    href: '/blog/frontend/2-browser-rendering',
    imgUrl: '/posts/2-browser-rendering/cover.png',
    title: '브라우저 렌더링 과정 쉽게 이해하기',
    date: '2023.07.24',
  },
  {
    href: '/blog/javascript/2-var-let-const',
    imgUrl: '/posts/2-var-let-const/cover.png',
    title: '면접 단골 질문! 호이스팅을 곁들인 var, let, const의 차이',
    date: '2023.07.13',
  },
  {
    href: '/blog/frontend/1-dom',
    imgUrl: '/posts/1-dom/new_cover.png',
    title: '웹을 이루는 핵심 요소를 알아봅시다! (DOM, BOM, JavaScript)',
    date: '2023.07.06',
  },
];
