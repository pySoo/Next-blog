import { AnimatePresence } from 'framer-motion';

import { fadeInHalf, staggerImmediate } from '@/constants/animations';
import { Snippet } from '@/types/post';

import { AnimatedContainer } from '../common';
import SnippetItem from './SnippetItem';

type SnippetListProps = {
  snippetList: Snippet[];
};

export default function SnippetList({ snippetList }: SnippetListProps) {
  return (
    <div className="mt-8 space-y-16">
      {snippetList.map(({ key, postList }) => {
        return (
          <AnimatedContainer
            as="ul"
            key={key}
            className="mt-4 grid grid-cols-2 gap-4"
            variants={staggerImmediate}
          >
            <AnimatePresence mode="wait">
              {postList.map((post) => (
                <AnimatedContainer
                  as="li"
                  key={post.slug}
                  variants={fadeInHalf}
                >
                  <SnippetItem post={post} />
                </AnimatedContainer>
              ))}
            </AnimatePresence>
          </AnimatedContainer>
        );
      })}
    </div>
  );
}
