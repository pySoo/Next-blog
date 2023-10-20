import { DefaultSeoProps } from 'next-seo';
import path from 'path';

export const BASE_PATH = '/posts';
export const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

export const siteConfig = {
  url: 'https://enjoydev.life',
  title: '기억은 기록을 이기지 못한다 ✍️',
  description:
    '어려운 것을 쉽게 설명하고 싶은 프론트엔드 개발자입니다. 웹 개발 지식과 JavaScript 지식을 쉽게 풀어 쓰는 활동을 하고 있습니다.',
  copyright: '물개박수 © All rights reserved.',
  since: 2023,
  googleAnalyticsId: '',
  author: {
    name: 'Suhyeon Park',
    photo: 'https://avatars.githubusercontent.com/u/55135881?s=288&v=4',
    bio: 'Frontend Engineer',
    contacts: {
      email: 'soopy368@gmail.com',
      github: 'pySoo',
      velog: '@soopy368',
    },
  },
  menus: [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'Blog',
      path: '/blog',
    },
    {
      label: 'Snippets',
      path: '/snippets',
    },
  ],
};

export const seoConfig: DefaultSeoProps = {
  title: siteConfig.title,
  description: siteConfig.description,
  canonical: siteConfig.url,
  openGraph: {
    type: 'website',
    locale: 'ko-KR',
    url: siteConfig.url,
    siteName: siteConfig.title,
  },
  additionalMetaTags: [
    {
      name: 'author',
      content: siteConfig.author.name,
    },
  ],
};
