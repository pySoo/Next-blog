import { getAllPosts } from '@/libs/api';
import { GetStaticProps } from 'next';
import Head from 'next/head';

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <div>
        <Head>
          <title>{`Next.js Blog Example with `}</title>
        </Head>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
};
