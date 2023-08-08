import { motion } from 'framer-motion';

import { fadeIn, staggerHalf } from '@/constants/animations';
import { allFeaturedPosts } from '@/libs/dataset';

import { LinkArrow, SubTitle } from '../common';
import { PostPressedCard } from '../post';

export default function FeaturedPosts() {
  return (
    <motion.section
      className="mt-10"
      variants={staggerHalf}
      initial="initial"
      animate="animate"
    >
      <motion.div variants={fadeIn}>
        <SubTitle className="mb-6 text-tertiary">Featured Posts</SubTitle>
      </motion.div>
      <motion.div className="grid gap-6 md:grid-cols-4" variants={staggerHalf}>
        {allFeaturedPosts.map((post) => (
          <PostPressedCard
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
  );
}
