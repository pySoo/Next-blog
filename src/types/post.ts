import { Post as TPost } from 'contentlayer/generated';

export type Optional<Type, Key extends keyof Type> = Omit<Type, Key> &
  Partial<Pick<Type, Key>>;

export type Post = TPost & {
  seriesName?: string | null;
  snippetName?: string | null;
};
export type ReducedPost = Omit<Omit<Omit<Post, 'body'>, '_raw'>, '_id'>;
