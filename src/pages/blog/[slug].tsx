import dayjs from 'dayjs';
import { GetStaticPaths, GetStaticProps } from 'next';

import { AnimatedContainer, HoverCard, IconText } from '@/components/common';
import { CalendarIcon, ListIcon } from '@/components/icons';
import PostItem from '@/components/post/PostItem';
import { PageSEO } from '@/components/SEO';
import {
  fadeIn,
  fadeInSlideToLeft,
  fadeInUp,
  staggerOne,
  staggerTwo,
} from '@/constants/animations';
import Layout from '@/layouts/Layout';
import { allSeries, allSeriesName } from '@/libs/dataset';
import { Series } from '@/types/post';

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: allSeriesName.map((seriesName) => `/blog/${seriesName}`),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const { slug } = params as { slug: string };

  const series = allSeries.find((v) => v.seriesName === slug);

  if (!series) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      series,
    },
  };
};

export default function PostPage({ series }: { series: Series }) {
  return (
    <Layout>
      <PageSEO
        title={series.title}
        description={series.description}
        url={series.slug}
      />

      <AnimatedContainer variants={staggerTwo} useTransition>
        <div className="grid gap-8 sm:grid-cols-3 sm:gap-32">
          <div className="sm:sticky sm:top-8 sm:self-start">
            <AnimatedContainer
              variants={fadeInSlideToLeft}
              className="sm:col-span-1"
            >
              <HoverCard>
                <div className="relative mx-auto h-[336px] w-[240px] select-none rounded-lg bg-neutral-200 px-11 pb-16 pt-12 dark:bg-neutral-800">
                  <div className="absolute inset-y-0 left-4 w-[1px] bg-neutral-50 dark:bg-neutral-700" />
                  <div className="text-primary flex h-full break-keep bg-neutral-50 px-3 py-4 text-xl font-semibold dark:bg-neutral-700">
                    {series.title}
                  </div>
                </div>
              </HoverCard>
            </AnimatedContainer>
          </div>

          <div className="sm:col-span-2">
            <AnimatedContainer
              variants={fadeIn}
              className="bg-secondary rounded-lg px-5 py-4"
            >
              <p className="text-primary font-medium">{series.description}</p>
              <div className="text-secondary mt-1 flex gap-2">
                <IconText
                  Icon={CalendarIcon}
                  text={dayjs(series.date).format('YY.MM.DD')}
                />
                <IconText Icon={ListIcon} text={`${series.posts.length}편`} />
              </div>
            </AnimatedContainer>

            <AnimatedContainer
              variants={staggerOne}
              className="mt-16 space-y-4"
              useTransition
            >
              {series.posts.map((post, i) => (
                <AnimatedContainer key={post.slug} variants={fadeInUp}>
                  <div className="flex space-x-6">
                    <div className="pt-4 font-bold">{i + 1}.</div>
                    <PostItem post={post} />
                  </div>
                </AnimatedContainer>
              ))}
            </AnimatedContainer>
          </div>
        </div>
      </AnimatedContainer>
    </Layout>
  );
}
