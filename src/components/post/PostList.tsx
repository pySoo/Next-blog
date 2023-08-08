import { motion } from 'framer-motion';

import { fadeIn, fadeInUp } from '@/constants/animations';
import { Post } from '@/types/post';

import PostItem from './PostItem';

export default function PostList({ postList }: { postList: Post[] }) {
  return (
    <>
      {postList.map((post) => (
        <motion.div key={post.slug} variants={fadeInUp}>
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            exit="exit"
            viewport={{ amount: 0.2, once: true }}
          >
            <PostItem post={post} />
          </motion.div>
        </motion.div>
      ))}
    </>
  );
}
