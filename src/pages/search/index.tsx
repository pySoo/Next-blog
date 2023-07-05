import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import SearchLayout from '@/layouts/SearchLayout';
import { allBlogPosts } from '@/libs/dataset';
import { Post } from '@/types/post';

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      postList: allBlogPosts,
    },
  };
};

export default function SearchPage({ postList }: { postList: Post[] }) {
  const router = useRouter();
  const searchQuery = (router.query?.q as string) || '';
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  const isDiffObjectList = (list1: Post[], list2: Post[]) => {
    if (list1.length !== list2.length) return true;

    const sameList = list1.filter((item1) =>
      list2.filter((item2) => item2.slug === item1.slug),
    );

    if (sameList.length === list1.length) return false;
    return true;
  };

  useEffect(() => {
    const filteredList = postList.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    if (isDiffObjectList(filteredPosts, filteredList)) {
      setFilteredPosts(filteredList);
    }
  }, [searchQuery]);

  return <SearchLayout postList={filteredPosts} searchQuery={searchQuery} />;
}
