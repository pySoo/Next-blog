import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';

import { AnimatedContainer, HoverCard, SubTitle } from '@/components/common';
import PostList from '@/components/post/PostList';
import { PageSEO } from '@/components/SEO';
import {
  fadeInHalf,
  fadeInSlideToLeft,
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
    <Layout
      title="Blog"
      description={`개발에 필요한 지식들을 소소하게 기록하는 공간입니다. \n 시리즈로 연재된 글은 아래의 시리즈 북을 통해 열람할 수 있습니다. 🙌`}
    >
      <PageSEO title="Blog" description="블로그 설명입니다." url="/blog" />
      <AnimatedContainer variants={fadeInHalf} useTransition>
        <div className="mt-10 mb-4 flex items-end gap-2">
          <SubTitle>{'All Series'}</SubTitle>
          <span className="font-bold">({seriesList.length})</span>
        </div>
        <AnimatedContainer
          variants={staggerOne}
          className="-my-12 -ml-8 -mr-5 flex items-center space-x-8 overflow-scroll py-12 px-8 no-scrollbar"
        >
          <AnimatePresence mode="wait">
            {seriesList.map((series) => (
              <AnimatedContainer key={series.slug} variants={fadeInSlideToLeft}>
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
              </AnimatedContainer>
            ))}
          </AnimatePresence>
        </AnimatedContainer>
      </AnimatedContainer>
      <AnimatedContainer
        variants={fadeInHalf}
        className="pt-8 mt-8 mb-4 flex items-end gap-2"
      >
        <SubTitle>{'All Posts'}</SubTitle>
        <span className="font-bold">({postList.length})</span>
      </AnimatedContainer>
      <AnimatedContainer
        variants={fadeInHalf}
        className="grid w-full gap-8 lg:grid-cols-2 lg:gap-12"
      >
        <PostList postList={postList} />
      </AnimatedContainer>
    </Layout>
  );
}
