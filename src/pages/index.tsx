import { motion } from 'framer-motion';
import PlainText from '@/common/PlainText';
import Title from '@/common/Title';
import { PageSEO } from '@/components/SEO';
import Layout from '@/layouts/Layout';
import React from 'react';
import { fadeIn, staggerHalf } from '@/constants/animations';
import SubTitle from '@/common/SubTitle';
import LinkArrow from '@/common/LinkArrow';
import { unsplashImageList } from '@/constants/image';
import PostCard from '@/components/PostCard';

export default function Home() {
  return (
    <Layout>
      <PageSEO title="pySoo blog" description="블로그 설명입니다." url="/" />
      <motion.section
        variants={staggerHalf}
        initial="initial"
        animate="animate"
      >
        <Title>pySoo</Title>
        <PlainText>
          안녕하세요. 꾸준함과 글쓰기를 좋아하는 개발자 박수현입니다.
        </PlainText>
      </motion.section>
      <motion.section
        className="mt-16"
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
            href="/blog/2023/06/test"
            imgUrl={unsplashImageList[13]}
            title="안녕하세요"
            date="2023.06.29"
          />
          <PostCard
            href="/blog/2023/06/test"
            imgUrl={unsplashImageList[10]}
            title="박수현 블로그입니다."
            date="2023.06.29"
          />
          <PostCard
            href="/blog/2023/06/test"
            imgUrl={unsplashImageList[8]}
            title="동해물과 백두산이 마르고 닳도록"
            date="2023.06.29"
          />
          <PostCard
            href="/blog/2023/06/test"
            imgUrl={unsplashImageList[9]}
            title="동해물과 백두산이 마르고 닳도록"
            date="2023.06.29"
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
