import { motion } from 'framer-motion';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { fadeInHalf } from '@/constants/animations';
import { MAX_TABLE_CONTENTS_LENGTH } from '@/constants/contents';
import { Post, TableOfContents } from '@/types/post';

import { ContentsBanner, ContentsTable } from '../contents';
import { CodeBlock, ZoomImage } from '../mdx';

type PostContentProps = {
  post: Post;
  tableOfContents: TableOfContents;
};

const mdxComponents = {
  img: ZoomImage,
  pre: CodeBlock,
};

export default function PostContent({
  post,
  tableOfContents,
}: PostContentProps) {
  const MDXContent = useMDXComponent(post.body?.code ?? '');

  return (
    <motion.div variants={fadeInHalf} className="relative gap-8 lg:flex">
      <div className="prose prose-neutral w-full max-w-3xl font-spoqa dark:prose-dark">
        <ContentsTable
          className="lg:hidden"
          tableOfContents={tableOfContents}
          onlyTitle={tableOfContents.length > MAX_TABLE_CONTENTS_LENGTH}
        />
        <MDXContent components={mdxComponents} />
      </div>
      <div className="mt-12 ml-auto">
        <div className="sticky top-[120px] hidden min-w-[240px] max-w-[260px] self-start lg:block">
          <ContentsBanner
            tableOfContents={tableOfContents}
            onlyTitle={tableOfContents.length > MAX_TABLE_CONTENTS_LENGTH}
          />
        </div>
      </div>
    </motion.div>
  );
}
