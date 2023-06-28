import PlainText from '@/common/PlainText';
import Title from '@/common/Title';
import { PageSEO } from '@/components/SEO';
import { fadeInHalf, staggerHalf } from '@/constants/animations';
import Layout from '@/layouts/Layout';
import { getAllPosts } from '@/libs/post';
import { motion } from 'framer-motion';

export const getStaticProps = () => {
  return {
    props: {
      postList: getAllPosts(),
    },
  };
};

export default function SnippetPage({ postList }: { postList: Post[] }) {
  return (
    <Layout>
      <PageSEO
        title="Snippets"
        description="Snippets 설명입니다."
        url="/snippets"
      />
      <Title>Snippets</Title>

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
