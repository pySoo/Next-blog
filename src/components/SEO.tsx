import { ArticleJsonLd, NextSeo } from 'next-seo';

import { siteConfig } from '@/constants/config';

const getTitle = (title?: string) => {
  if (!title) return siteConfig.title;
  if (title.length > 10) return title;

  return `${title} - pySoo`;
};

const getRelativeUrl = (url?: string) => {
  if (!url) return siteConfig.url;

  return `${siteConfig.url}/${url.replace(/^\/+/g, '')}`;
};

const DEFAULT_IMAGE = `${siteConfig.url}/images/base.jpeg`;

const getImageUrl = (img?: string) => {
  if (!img) return DEFAULT_IMAGE;
  if (img.startsWith('https://')) return img;

  return `${siteConfig.url}/${img}`;
};

/**
 * use in Normal Page SEO
 */

type PageSEOType = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
};

export function PageSEO({ ...props }: PageSEOType) {
  const title = getTitle(props.title);
  const description = props.description ?? siteConfig.description;
  const url = getRelativeUrl(props.url);
  const image = getImageUrl(props.image);

  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        url,
        title,
        description,
        images: [{ url: image }],
      }}
    />
  );
}

/**
 * use in Article Page SEO
 */
export function BlogSEO({
  summary,
  tags,
  image,
  ...props
}: {
  title: string;
  summary: string;
  date: string;
  url: string;
  tags: string[];
  image?: string;
}) {
  const title = getTitle(props.title);
  const url = getRelativeUrl(props.url);
  const dateTime = new Date(props.date).toISOString();
  const coverImage = image ?? DEFAULT_IMAGE;

  return (
    <>
      <NextSeo
        title={title}
        description={summary}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: dateTime,
            modifiedTime: dateTime,
            authors: [`https://github.com/pySoo`],
            tags,
          },
          url,
          title,
          description: summary,
          images: [{ url: coverImage }],
        }}
      />
      <ArticleJsonLd
        datePublished={dateTime}
        dateModified={dateTime}
        images={[coverImage]}
        url={url}
        title={title}
        description={summary}
        authorName={siteConfig.author.name}
        publisherName={siteConfig.author.name}
        publisherLogo={`${siteConfig.url}/favicon.ico`}
      />
    </>
  );
}
