import { Post, ReducedPost } from '@/types/post';

export const reducePost = ({
  body: _,
  _raw,
  _id,
  ...post
}: Post): ReducedPost => post;
