import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import title from 'title';

import { AnimatedContainer, Pill } from '@/components/common';
import { PageSEO } from '@/components/SEO';
import { SnippetList } from '@/components/snippet';
import {
  fadeInHalf,
  staggerHalf,
  staggerImmediate,
} from '@/constants/animations';
import Layout from '@/layouts/Layout';
import { reducedAllSnippets } from '@/libs/dataset';
import { ReducedPost, Snippet } from '@/types/post';

export const getStaticProps: GetStaticProps = () => {
  const tagSnippets = reducedAllSnippets.reduce<{
    [key: string]: ReducedPost[];
  }>((ac, snippet) => {
    if (!snippet.snippetName) {
      return ac;
    }

    if (!ac[snippet.snippetName]) {
      ac[snippet.snippetName] = [];
    }

    ac[snippet.snippetName].push(snippet);
    return ac;
  }, {});

  const snippetList = Object.keys(tagSnippets)
    .map<Snippet>((key) => ({
      key,
      postList: tagSnippets[key],
    }))
    .sort((a, b) => b.postList.length - a.postList.length);

  return {
    props: { snippetList },
  };
};

export default function SnippetPage({
  snippetList,
}: {
  snippetList: Snippet[];
}) {
  const router = useRouter();
  const selectedKey = router.query?.key;

  const isAll = !selectedKey || selectedKey === 'all';
  const allSnippetsCnt = snippetList.reduce(
    (ac, snippet) => ac + snippet.postList.length,
    0,
  );

  const filteredSnippetList = snippetList.filter((snippet) => {
    if (isAll) return true;
    return snippet.key === selectedKey;
  });

  return (
    <Layout
      title="Snippets"
      description="개발하면서 실제 유용하게 사용했던 코드 조각 모음입니다."
    >
      <PageSEO
        title="Snippets"
        description="Snippets 설명입니다."
        url="/snippets"
      />
      <AnimatedContainer variants={staggerHalf} useTransition>
        <AnimatedContainer
          variants={staggerImmediate}
          className="bg-primary sticky top-0 z-10 -mx-2 flex items-center gap-2 overflow-scroll bg-opacity-70 px-2 py-4 backdrop-blur transition-all no-scrollbar dark:bg-opacity-70"
        >
          <AnimatedContainer variants={fadeInHalf}>
            <Link href="?key=all">
              <Pill
                selected={isAll}
                className="cursor-pointer whitespace-nowrap"
              >
                All <span className="text-xs">{allSnippetsCnt}</span>
              </Pill>
            </Link>
          </AnimatedContainer>
          {snippetList.map(({ key, postList }) => (
            <AnimatedContainer key={key} variants={fadeInHalf}>
              <Link href={`?key=${key}`}>
                <Pill
                  className="cursor-pointer whitespace-nowrap"
                  selected={key === selectedKey}
                >
                  {title(key)}
                  <span className="text-xs ml-1">{postList.length}</span>
                </Pill>
              </Link>
            </AnimatedContainer>
          ))}
        </AnimatedContainer>
        <SnippetList snippetList={filteredSnippetList} />
      </AnimatedContainer>
    </Layout>
  );
}
