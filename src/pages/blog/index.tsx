import { motion } from 'framer-motion';

import PlainText from '@/common/PlainText';
import Title from '@/common/Title';
import { PageSEO } from '@/components/SEO';
import { fadeInHalf, staggerHalf } from '@/constants/animations';
import Layout from '@/layouts/Layout';

export const getStaticProps = () => {
  return {
    props: {
      postList: 0,
    },
  };
};

export default function BlogPage() {
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
      </motion.div>
    </Layout>
  );
}
