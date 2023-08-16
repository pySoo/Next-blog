import dayjs from 'dayjs';
import Link from 'next/link';

import { fadeInHalf } from '@/constants/animations';
import { Post, Series } from '@/types/post';

import { AnimatedContainer, IconText, SectionBorder, Title } from '../common';
import { CalendarIcon, ClockIcon } from '../icons';

type PostHeaderProps = {
  post: Post;
  series?: Series | null;
};

export default function PostHeader({ post, series }: PostHeaderProps) {
  const headerTagTitle = series?.title ?? post.snippetName;
  const headerTagSlug =
    series?.slug ?? `/snippets?key=${post.snippetName ?? 'all'}`;

  return (
    <AnimatedContainer variants={fadeInHalf}>
      <Title className="mx-auto mb-4 max-w-3xl text-center">{post.title}</Title>
      {headerTagTitle && (
        <div className="mt-2 flex justify-center gap-1">
          {post.snippetName && <span>snippet: </span>}
          <Link href={headerTagSlug}>
            <span className="text-sm font-medium underline underline-offset-4 sm:text-base">
              {headerTagTitle}
            </span>
          </Link>
        </div>
      )}
      <div className="mt-2 flex w-full flex-col justify-between md:flex-row md:items-center">
        <div className="mx-auto flex gap-2 text-neutral-600 dark:text-neutral-400">
          <IconText
            Icon={CalendarIcon}
            text={dayjs(post.date).format('YYYY.MM.DD')}
          />
          <IconText Icon={ClockIcon} text={`${post.readingMinutes}분`} />
        </div>
      </div>
      <SectionBorder className="mt-4" />
    </AnimatedContainer>
  );
}
