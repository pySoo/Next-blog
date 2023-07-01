import { motion } from 'framer-motion';

import PlainText from '@/common/PlainText';
import SubTitle from '@/common/SubTitle';
import Title from '@/common/Title';
import PostList from '@/components/PostList';
import { PageSEO } from '@/components/SEO';
import {
  fadeIn,
  fadeInHalf,
  fadeInUp,
  staggerHalf,
} from '@/constants/animations';
import Layout from '@/layouts/Layout';
import { allBlogPosts } from '@/libs/dataset';
import { Post } from '@/types/post';

export const getStaticProps = () => {
  return {
    props: {
      postList: allBlogPosts,
    },
  };
};

export default function BlogPage({ postList }: { postList: Post[] }) {
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
          <PlainText>어서 내용을 채우고 싶군요 🤗</PlainText>
        </motion.div>
        <motion.div
          className="mt-16 mb-4 flex items-end gap-2"
          variants={fadeInHalf}
        >
          <SubTitle>All Posts</SubTitle>
          <span className="font-bold">({postList.length})</span>
        </motion.div>

        <motion.div
          className="mt-12 grid w-full gap-8 lg:grid-cols-2 lg:gap-12"
          variants={staggerHalf}
        >
          {postList.map((post) => (
            <motion.div key={post.slug} variants={fadeInUp}>
              <motion.div
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                exit="exit"
                viewport={{ amount: 0.6, once: true }}
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
