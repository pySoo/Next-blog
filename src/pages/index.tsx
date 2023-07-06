import { motion } from 'framer-motion';
import React from 'react';

import LinkArrow from '@/common/LinkArrow';
import Pill from '@/common/Pill';
import PlainText from '@/common/PlainText';
import SubTitle from '@/common/SubTitle';
import Title from '@/common/Title';
import PostCard from '@/components/PostCard';
import { PageSEO } from '@/components/SEO';
import { fadeIn, staggerHalf } from '@/constants/animations';
import Layout from '@/layouts/Layout';

export default function Home() {
  return (
    <Layout>
      <PageSEO url="/" />
      <motion.section
        variants={staggerHalf}
        initial="initial"
        animate="animate"
      >
        <Title>Seize the day!</Title>
        <PlainText>
          반갑습니다🤗 꾸준함과 글쓰기를 좋아하는 개발자 박수현입니다. <br />
          현재 블로그 이사 작업을 하고 있습니다. 🚛 💭 💭 <br />
        </PlainText>
        <div className="flex items-center text-tertiary">
          더 많은 글을 읽어보시려면
          <a
            href={`https://velog.io/@soopy368`}
            target="_blank"
            rel="noreferrer"
          >
            <Pill className="w-fit mx-1">Velog</Pill>
          </a>
          를 방문해주세요!
        </div>
      </motion.section>
      <motion.section
        className="mt-12"
        variants={staggerHalf}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={fadeIn}>
          <SubTitle className="mb-6">Featured Posts</SubTitle>
        </motion.div>

        <motion.div
          variants={staggerHalf}
          className="grid gap-6 md:grid-cols-4"
        >
          <PostCard
            href="/blog/frontend/1-dom"
            imgUrl="/posts/1-dom/cover.png"
            title="웹을 이루는 핵심 요소를 알아봅시다! (DOM, BOM, JavaScript)"
            date="2023.07.06"
          />
          <PostCard
            href="/blog/javascript/1-var"
            imgUrl="/posts/1-var/cover.png"
            title="var 모르고 쓰면 큰일납니다."
            date="2023.07.06"
          />
          <PostCard
            href=""
            imgUrl="/images/samples/draft-cover.png"
            title="(공개 예정) Next.js의 SSR, SSG, ISR 이해하기 "
            date="-"
            isDraft
          />
          <PostCard
            href=""
            imgUrl="/images/samples/draft3.png"
            title="(공개 예정) Critical Rendering Path"
            date="-"
            isDraft
          />
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
