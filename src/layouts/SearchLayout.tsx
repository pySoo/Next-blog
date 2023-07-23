import { motion } from 'framer-motion';

import { PlainText, SubTitle, Title } from '@/components/common';
import PostList from '@/components/post/PostList';
import { PageSEO } from '@/components/SEO';
import {
  fadeIn,
  fadeInHalf,
  fadeInUp,
  staggerHalf,
} from '@/constants/animations';
import Layout from '@/layouts/Layout';
import { Post } from '@/types/post';

export default function SearchLayout({
  postList,
  searchQuery,
}: {
  postList: Post[];
  searchQuery: string;
}) {
  return (
    <Layout>
      <PageSEO
        title="search"
        description="포스트 검색 결과입니다."
        url="/search"
      />
      <Title>Search</Title>

      <motion.div
        variants={staggerHalf}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.div
          className="mt-8 mb-4 flex items-end gap-2"
          variants={fadeInHalf}
        >
          <SubTitle>{searchQuery ? 'Filtered Posts' : 'All Posts'}</SubTitle>
          <span className="font-bold">({postList.length})</span>
        </motion.div>

        <motion.div
          className={`grid w-full gap-8 lg:gap-12 ${
            postList.length !== 0 && 'lg:grid-cols-2'
          }`}
          variants={staggerHalf}
        >
          {postList.length == 0 && (
            <div className="min-h-[300px] flex items-center mx-auto mt-4">
              <PlainText>검색된 내용이 없습니다.</PlainText>
            </div>
          )}
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
