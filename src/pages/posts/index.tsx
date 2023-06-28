import { getAllPosts } from '@/libs/post';

export const getStaticProps = () => {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
};

export default function PostsPage({ posts }: { posts: { slug: string }[] }) {
  return (
    <ul>
      {posts.map((post, i) => (
        <li key={i}>{post.slug}</li>
      ))}
    </ul>
  );
}
