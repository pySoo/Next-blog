import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import { LinkArrow, Pill, SubTitle, Title } from '@/components/common';
import PostCard from '@/components/post/PostCard';
import { PageSEO } from '@/components/SEO';
import { fadeIn, staggerHalf } from '@/constants/animations';
import Layout from '@/layouts/Layout';
import { allFeaturedPosts } from '@/libs/dataset';

export default function Home() {
  return (
    <Layout>
      <PageSEO url="/" />
      <motion.section
        variants={staggerHalf}
        initial="initial"
        animate="animate"
        className="text-tertiary"
      >
        <Title className="text-primary flex max-[410px]:flex-col">
          <span className="mr-2 pb-1">기억은 기록을 이기지</span>
          <span className="flex">
            <span>못한다</span>
            <span className="ml-2">✍️</span>
          </span>
        </Title>
        <div className="pt-2 flex flex-col sm:flex-row justify-between">
          <div className="w-full h-full">
            <p className="w-full h-full">
              반갑습니다 🤗 <br />
              어려운 것을 쉽게 설명하고 싶은 프론트엔드 개발자 박수현입니다.
              <br />
            </p>
            <p className="pt-[15px] sm:hidden">
              상단의{' '}
              <motion.span
                className="text-orange-500 font-bold"
                whileTap={{ fontSize: '20px' }}
              >
                해바라기
              </motion.span>
              를 눌러서 블로그를 구경해 보시죠!
            </p>
            <p className="pt-[15px]">
              현재 블로그 이사 작업을 하고 있습니다. 🚛 💭 💭 <br />
            </p>
            <div className="w-full flex items-center whitespace-nowrap">
              <span>더 많은 글을 읽어보시려면</span>
              <a
                href={`https://velog.io/@soopy368`}
                target="_blank"
                rel="noreferrer"
              >
                <Pill className="w-fit mx-1">Velog</Pill>
              </a>
              <span>를 방문해주세요!</span>
            </div>
          </div>
          <div className="w-[256px] relative mt-8 mx-auto sm:mt-0">
            <div
              className={`absolute left-0 top-0 w-[22px] h-full z-[10] pointer-events-none
              bg-gradient-to-r from-neutral-50 dark:from-neutral-900`}
            />
            <div className="w-fit mx-auto object-contain h-[128px] sm:h-[140px]">
              <Image
                width={256}
                height={128}
                src="/gif/truck.webp"
                alt="truck"
              />
            </div>
            <div
              className={`absolute right-0 top-0 w-[12px] h-full z-[10] pointer-events-none
              bg-gradient-to-l from-neutral-50 dark:from-neutral-900`}
            />
          </div>
        </div>
      </motion.section>
      <motion.section
        className="mt-10"
        variants={staggerHalf}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={fadeIn}>
          <SubTitle className="mb-6 text-tertiary">Featured Posts</SubTitle>
        </motion.div>
        <motion.div
          className="grid gap-6 md:grid-cols-4"
          variants={staggerHalf}
        >
          {allFeaturedPosts.map((post) => (
            <PostCard
              key={post.title}
              href={post.href}
              imgUrl={post.imgUrl}
              title={post.title}
              date={post.date}
              isDraft={post.isDraft}
            />
          ))}
        </motion.div>
        <motion.div variants={fadeIn}>
          <LinkArrow href="/blog" className="mt-8">
            모든 글 보기
          </LinkArrow>
        </motion.div>
      </motion.section>
    </Layout>
  );
}
