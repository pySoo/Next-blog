import { Post } from 'contentlayer/generated';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import { useMDXComponent } from 'next-contentlayer/hooks';

import IconText from '@/common/IconText';
import SectionBorder from '@/common/SectionBorder';
import Title from '@/common/Title';
import CalendarIcon from '@/components/icons/CalendarIcon';
import ClockIcon from '@/components/icons/ClockIcon';
import CodeBlock from '@/components/mdx/CodeBlock';
import ZoomImage from '@/components/mdx/ZoomImage';
import PostFooter from '@/components/PostFooter';
import { PostNavigationProps } from '@/components/PostNavigation';
import { fadeInHalf, staggerHalf } from '@/constants/animations';

import Layout from './Layout';

export type PostDetailLayoutProps = {
  post: Post;
  postNavigation: PostNavigationProps;
};

const mdxComponents = {
  img: ZoomImage,
  pre: CodeBlock,
};

export default function PostDetailLayout({
  post,
  postNavigation,
}: PostDetailLayoutProps) {
  const MDXContent = useMDXComponent(post.body?.code ?? '');

  return (
    <Layout>
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
            <MDXContent components={mdxComponents} />
          </div>
        </motion.div>
        {/* Post Footer */}
        <PostFooter post={post} postNavigation={postNavigation} />
      </motion.section>
    </Layout>
  );
}
