import path from 'path';
import { DefaultSeoProps } from 'next-seo';

export const BASE_PATH = '/posts';
export const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

export const siteConfig = {
  url: 'https://pySoo.github.io',
  title: '물개박수 블로그',
  description: '꾸준함과 글쓰기를 좋아하는 프론트엔드 개발자입니다.',
  copyright: 'pySoo © All rights reserved.',
  since: 2023,
  googleAnalyticsId: '',
  author: {
    name: 'Suhyeon Park',
    photo: 'https://avatars.githubusercontent.com/u/55135881?s=96&v=4',
    bio: 'Junior Frontend Engineer',
    contacts: {
      email: 'soopy368@gmail.com',
      github: 'pySoo',
      velog: '@pySoo',
    },
  },
  menus: [
    {
      label: 'Blog',
      path: '/blog',
    },
    {
      label: 'Snippets',
      path: '/snippets',
    },
    {
      label: 'Archives',
      path: '/archives',
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
