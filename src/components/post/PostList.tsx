import { fadeIn, fadeInUp } from '@/constants/animations';
import { Post } from '@/types/post';

import { AnimatedContainer } from '../common';
import PostItem from './PostItem';

export default function PostList({ postList }: { postList: Post[] }) {
  return (
    <>
      {postList.map((post) => (
        <AnimatedContainer key={post.slug} variants={fadeInUp}>
          <AnimatedContainer
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            exit="exit"
            viewport={{ amount: 0.2, once: true }}
          >
            <PostItem post={post} />
          </AnimatedContainer>
        </AnimatedContainer>
      ))}
    </>
  );
}
