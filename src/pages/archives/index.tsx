import { motion } from 'framer-motion';

import PlainText from '@/common/PlainText';
import Title from '@/common/Title';
import { PageSEO } from '@/components/SEO';
import { fadeInHalf, staggerHalf } from '@/constants/animations';
import Layout from '@/layouts/Layout';

export default function ArchivesPage() {
  return (
    <Layout>
      <PageSEO
        title="Archives"
        description="아카이브 설명입니다."
        url="/archives"
      />
      <Title>Archives</Title>

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
