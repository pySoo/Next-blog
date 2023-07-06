import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useMDXComponent } from 'next-contentlayer/hooks';

import IconText from '@/common/IconText';
import SectionBorder from '@/common/SectionBorder';
import Title from '@/common/Title';
import ContentsBanner from '@/components/ContentsBanner';
import ContentsTable from '@/components/ContentsTable';
import CalendarIcon from '@/components/icons/CalendarIcon';
import ClockIcon from '@/components/icons/ClockIcon';
import CodeBlock from '@/components/mdx/CodeBlock';
import ZoomImage from '@/components/mdx/ZoomImage';
import PostFooter from '@/components/PostFooter';
import { PostNavigationProps } from '@/components/PostNavigation';
import { BlogSEO } from '@/components/SEO';
import { fadeInHalf, staggerHalf } from '@/constants/animations';
import { Post, Series, TableOfContents } from '@/types/post';

import Layout from './Layout';

export type PostDetailLayoutProps = {
  post: Post;
  series?: Series | null;
  postNavigation: PostNavigationProps;
  tableOfContents: TableOfContents;
};

const mdxComponents = {
  img: ZoomImage,
  pre: CodeBlock,
};

export default function PostDetailLayout({
  post,
  series,
  postNavigation,
  tableOfContents,
}: PostDetailLayoutProps) {
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
            />
            <MDXContent components={mdxComponents} />
          </div>
          <div className="mt-12 ml-auto">
            <div className="sticky top-[120px] hidden min-w-[240px] max-w-[260px] self-start lg:block">
              <ContentsBanner tableOfContents={tableOfContents} />
            </div>
          </div>
        </motion.div>
        {/* Post Footer */}
        <PostFooter post={post} postNavigation={postNavigation} />
      </motion.section>
    </Layout>
  );
}
