import {
  AnimatedContainer,
  LinkExternal,
  SectionBorder,
  Tag,
} from '@/components/common';
import { fadeInHalf } from '@/constants/animations';
import { siteConfig } from '@/constants/config';
import { Post } from '@/types/post';

import AuthorContacts from '../AuthorContacts';
import { Giscus } from '../contents';
import PostNavigation, { PostNavigationProps } from './PostNavigation';

type PostFooterType = {
  post: Post;
  postNavigation: PostNavigationProps;
};

export default function PostFooter({ post, postNavigation }: PostFooterType) {
  return (
    <AnimatedContainer variants={fadeInHalf} className="space-y-8 mt-12">
      <div className="flex gap-2">
        {post.tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>
      <SectionBorder />
      <div className="flex w-full items-center justify-center">
        <div className="flex items-center gap-4 sm:gap-8 sm:p-12">
          <LinkExternal
            href={`https://github.com/${siteConfig.author.contacts.github}`}
          >
            <img
              src={siteConfig.author.photo}
              className="h-24 w-24 select-none overflow-hidden rounded-full"
              alt="프로필 사진"
              draggable={false}
            />
          </LinkExternal>
          <div>
            <div className="font-bold">{siteConfig.author.name}</div>
            <div className="text-tertiary text-sm">{siteConfig.author.bio}</div>
            <AuthorContacts className="mt-2 text-sm" />
          </div>
        </div>
      </div>
      <PostNavigation {...postNavigation} />
      <Giscus />
    </AnimatedContainer>
  );
}
