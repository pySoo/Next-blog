import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { IconText, SectionBorder, Title } from '@/components/common';
import {
  ContentsBanner,
  ContentsTable,
  ReadingProgressBar,
} from '@/components/contents';
import { CalendarIcon, ClockIcon } from '@/components/icons';
import { CodeBlock, ZoomImage } from '@/components/mdx';
import PostFooter from '@/components/post/PostFooter';
import { PostNavigationProps } from '@/components/post/PostNavigation';
import { BlogSEO } from '@/components/SEO';
import SeriesCard from '@/components/series/SeriesCard';
import { fadeInHalf, staggerHalf } from '@/constants/animations';
import { MAX_TABLE_CONTENTS_LENGTH } from '@/constants/contents';
import { Post, Series, TableOfContents } from '@/types/post';

import Layout from './Layout';

export type PostLayoutProps = {
  post: Post;
  series?: Series | null;
  postNavigation: PostNavigationProps;
  tableOfContents: TableOfContents;
};

const mdxComponents = {
  img: ZoomImage,
  pre: CodeBlock,
};

export default function PostLayout({
  post,
  series,
  postNavigation,
  tableOfContents,
}: PostLayoutProps) {
  const headerTagTitle = series?.title ?? post.snippetName;
  const headerTagSlug =
    series?.slug ?? `/snippets?key=${post.snippetName ?? 'all'}`;

  const MDXContent = useMDXComponent(post.body?.code ?? '');

  return (
    <Layout>
      <BlogSEO
        {...post}
        url={post.slug}
        summary={post.description}
        images={[]}
      />
      <ReadingProgressBar />
      <motion.section
        variants={staggerHalf}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* Post Header */}
        <motion.div variants={fadeInHalf}>
          <Title className="mx-auto mb-4 max-w-3xl text-center">
            {post.title}
          </Title>
          {headerTagTitle && (
            <div className="mt-2 flex justify-center gap-1">
              {post.snippetName && <span>snippet: </span>}
              <Link href={headerTagSlug}>
                <span className="text-sm font-medium underline underline-offset-4 sm:text-base">
                  {headerTagTitle}
                </span>
              </Link>
            </div>
          )}
          <div className="mt-2 flex w-full flex-col justify-between md:flex-row md:items-center">
            <div className="mx-auto flex gap-2 text-neutral-600 dark:text-neutral-400">
              <IconText
                Icon={CalendarIcon}
                text={dayjs(post.date).format('YYYY.MM.DD')}
              />
              <IconText Icon={ClockIcon} text={`${post.readingMinutes}분`} />
            </div>
          </div>
          <SectionBorder className="mt-4" />
        </motion.div>
        {/* Post Content */}
        <motion.div variants={fadeInHalf} className="relative gap-8 lg:flex">
          <div className="prose prose-neutral w-full max-w-3xl font-spoqa dark:prose-dark">
            <ContentsTable
              className="lg:hidden"
              tableOfContents={tableOfContents}
              onlyTitle={tableOfContents.length > MAX_TABLE_CONTENTS_LENGTH}
            />
            <MDXContent components={mdxComponents} />
          </div>
          <div className="mt-12 ml-auto">
            <div className="sticky top-[120px] hidden min-w-[240px] max-w-[260px] self-start lg:block">
              <ContentsBanner
                tableOfContents={tableOfContents}
                onlyTitle={tableOfContents.length > MAX_TABLE_CONTENTS_LENGTH}
              />
            </div>
          </div>
        </motion.div>
        {series && <SeriesCard currentPost={post} series={series} />}
        {/* Post Footer */}
        <PostFooter post={post} postNavigation={postNavigation} />
      </motion.section>
    </Layout>
  );
}
