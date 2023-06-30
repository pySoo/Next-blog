import { Post } from 'contentlayer/generated';
import dayjs from 'dayjs';
import Link from 'next/link';

import IconText from '@/common/IconText';
import Tag from '@/common/Tag';
import { $ } from '@/libs/core';

import CalendarIcon from './icons/CalendarIcon';
import ClockIcon from './icons/ClockIcon';

export default function PostList({ post }: { post: Post }) {
  const href = `/blog/[...slug]`;

  return (
    <div className={$('text-ye group w-full py-4 hover:drop-shadow-base')}>
      <Link as={post.slug} href={href} className="hover:drop-shadow-base">
        <p className="text-xl font-bold">{post.title}</p>
        <p className="text-tertiary mt-1">{post.description}</p>
      </Link>
      <div className="mt-2 inline-flex w-full items-start gap-2 text-sm">
        <div className="flex flex-wrap items-center gap-2">
          {post.tags.map((tag, i) => (
            <Tag key={i} tag={tag} />
          ))}
        </div>

        <div className="ml-auto flex gap-2 whitespace-nowrap group-hover:drop-shadow-base-bold">
          <IconText
            Icon={CalendarIcon}
            text={dayjs(post.date).format('YY.MM.DD')}
          />
          <IconText Icon={ClockIcon} text={`${post.readingMinutes}분`} />
        </div>
      </div>
    </div>
  );
}
