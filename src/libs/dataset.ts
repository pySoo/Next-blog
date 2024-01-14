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
    href: '/blog/retrospect/5-daangn-interview',
    imgUrl: '/posts/5-daangn-interview/240115-034801.png',
    title: '당근마켓 최종 면접까지의 과정을 돌아보며',
    date: '2024.01.15',
  },
  {
    href: '/blog/retrospect/2-abstract-architecture',
    imgUrl: '/posts/2-abstract-architecture/cover.png',
    title: '변화에 유연한 설계를 위한 고민 - 추상화란 무엇인가?',
    date: '2023.11.19',
  },
  {
    href: '/blog/retrospect/1-devcourse-MIL-1',
    imgUrl: '/posts/1-devcourse-MIL-1/featured.png',
    title: '퇴사 후 나는 어떤 성장을 이루었나 - 데브코스 회고',
    date: '2023.10.23',
  },
  {
    href: '/blog/retrospect/3-devcourse-MIL-2',
    imgUrl: '/posts/3-devcourse-mil-2/cover.png',
    title: '차별화된 나만의 무기 찾기 - 데브코스 회고',
    date: '2023.11.22',
  },
  {
    href: '/blog/frontend/11-graphql',
    imgUrl: '/posts/11-graphql/featured.png',
    title: 'REST API에서 GraphQL로의 패러다임 전환 - Facebook이 주목한 기술',
    date: '2023.10.20',
  },
  {
    href: '/blog/nextjs/3-performance',
    imgUrl: '/posts/3-performance/cover.png',
    title: 'Lighthouse로 Next.js 성능 44% 개선하기',
    date: '2023.09.08',
  },
  {
    href: '/blog/frontend/8-monorepo',
    imgUrl: '/posts/8-monorepo/cover.png',
    title: 'yarn workspace와 사내 모노레포 도입 여정 🏃🏼‍♂️',
    date: '2023.09.05',
  },
  {
    href: '/blog/nextjs/1-ssr-ssg-isr',
    imgUrl: '/posts/1-ssr-ssg-isr/featured.png',
    title: 'Next.js의 렌더링 방식 이해하기 - SSR, SSG, ISR',
    date: '2023.08.21',
  },
  {
    href: '/blog/frontend/4-module-bundler',
    imgUrl: '/posts/4-module-bundler/featured.png',
    title: '모듈 번들러란? - Webpack vs Vite 무엇을 써야 할까요?',
    date: '2023.08.18',
  },
  {
    href: '/blog/nextjs/2-lighthouse',
    imgUrl: '/posts/2-lighthouse/cover.png',
    title: '웹 페이지 성능 개선에 필요한 Lighthouse 지표 알아보기',
    date: '2023.09.06',
  },
  {
    href: '/blog/frontend/9-optimizing-loading-speed',
    imgUrl: '/posts/9-optimizing-loading-speed/featured.png',
    title: 'React의 초기 렌더링 속도 최적화하기',
    date: '2023.09.15',
  },
  {
    href: '/blog/frontend/10-cors',
    imgUrl: '/posts/10-cors/featured.png',
    title: '웹 개발자의 신고식 🚨 CORS로부터 해방 되기',
    date: '2023.10.06',
  },
];
