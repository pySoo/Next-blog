import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

import PlainText from '@/common/PlainText';
import SubTitle from '@/common/SubTitle';
import Title from '@/common/Title';
import HoverCard from '@/components/HoverCard';
import PostList from '@/components/PostList';
import { PageSEO } from '@/components/SEO';
import {
  fadeIn,
  fadeInHalf,
  fadeInSlideToLeft,
  fadeInUp,
  staggerHalf,
  staggerOne,
} from '@/constants/animations';
import Layout from '@/layouts/Layout';
import { allBlogPosts, allSeries } from '@/libs/dataset';
import { Post, Series } from '@/types/post';

export const getStaticProps = () => {
  return {
    props: {
      postList: allBlogPosts,
      seriesList: allSeries,
    },
  };
};

export default function BlogPage({
  postList,
  seriesList,
}: {
  postList: Post[];
  seriesList: Series[];
}) {
  return (
    <Layout>
      <PageSEO title="Blog" description="블로그 설명입니다." url="/blog" />
      <Title>Blog</Title>

      <motion.div
        variants={staggerHalf}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.div variants={fadeInHalf}>
          <PlainText>
            {`개발에 필요한 지식들을 소소하게 기록하는 공간입니다.`}
            <br />
            {`시리즈로 연재된 글은 아래의 시리즈 북을 통해 열람할 수 있습니다. 🙌`}
          </PlainText>
        </motion.div>
        <motion.div variants={fadeInHalf}>
          <motion.div className="mt-10 mb-4 flex items-end gap-2">
            <SubTitle>{'All Series'}</SubTitle>
            <span className="font-bold">({seriesList.length})</span>
          </motion.div>
          <motion.div
            className="-my-12 -ml-8 flex items-center space-x-6 overflow-scroll py-12 pl-8 no-scrollbar gap-3"
            variants={staggerOne}
          >
            <AnimatePresence mode="wait">
              {seriesList.map((series) => (
                <motion.div key={series.slug} variants={fadeInSlideToLeft}>
                  <Link as={series.slug} href={`/blog/[slug]`}>
                    <HoverCard>
                      <div className="relative h-56 w-40 select-none rounded-lg bg-neutral-200 px-8 pt-8 pb-12 shadow-lg transition-all hover:scale-[1.01] hover:shadow-xl dark:bg-neutral-800">
                        <div className="absolute inset-y-0 left-2.5 w-[1px] bg-neutral-100 dark:bg-neutral-700" />
                        <div className="flex h-full break-keep bg-white px-2 py-3 text-sm font-medium dark:bg-neutral-700 dark:text-white">
                          {series.title}
                        </div>
                      </div>
                    </HoverCard>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
        <motion.div
          className="pt-8 mt-8 mb-4 flex items-end gap-2"
          variants={fadeInHalf}
        >
          <SubTitle>{'All Posts'}</SubTitle>
          <span className="font-bold">({postList.length})</span>
        </motion.div>

        <motion.div
          className="grid w-full gap-8 lg:grid-cols-2 lg:gap-12"
          variants={staggerHalf}
        >
          {postList.map((post) => (
            <motion.div key={post.slug} variants={fadeInUp}>
              <motion.div
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                exit="exit"
                viewport={{ amount: 0.2, once: true }}
              >
                <PostList post={post} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Layout>
  );
}
