import { motion } from 'framer-motion';
import React from 'react';

import LinkArrow from '@/common/LinkArrow';
import Pill from '@/common/Pill';
import SubTitle from '@/common/SubTitle';
import Title from '@/common/Title';
import PostCard from '@/components/PostCard';
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
        <Title>Seize the day!</Title>
        <span>
          반갑습니다🤗 <br />
          꾸준함과 글쓰기를 좋아하는 개발자 박수현입니다. <br /> <br />
          현재 블로그 이사 작업을 하고 있습니다. 🚛 💭 💭
        </span>
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
      </motion.section>
      <motion.section
        className="mt-10"
        variants={staggerHalf}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={fadeIn}>
          <SubTitle className="mb-6">Featured Posts</SubTitle>
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
