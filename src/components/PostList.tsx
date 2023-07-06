import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import IconText from '@/common/IconText';
import Tag from '@/common/Tag';
import { defaultCoverImage } from '@/constants/image';
import { $ } from '@/libs/core';
import { ReducedPost } from '@/types/post';

import CalendarIcon from './icons/CalendarIcon';
import ClockIcon from './icons/ClockIcon';

export default function PostList({ post }: { post: ReducedPost }) {
  const href = !!post.snippetName ? `/snippets/[...slug]` : `/blog/[...slug]`;

  return (
    <div className={$('text-ye group w-full py-4')}>
      <Link as={post.slug} href={href}>
        <div className="overflow-hidden rounded-xl bg-neutral-200 dark:bg-neutral-800 mb-3 group-hover:opacity-90">
          <Image
            src={post.image ?? defaultCoverImage}
            alt={'대표 이미지'}
            width={530}
            height={530}
            className="h-52 w-full object-cover max-w-[530px] mx-auto"
            draggable={false}
          />
        </div>
        <p className="text-xl font-bold group-hover:text-highlight">
          {post.title}
        </p>
        <p className="text-tertiary mt-1">{post.description}</p>
      </Link>
      <div className="mt-2 inline-flex w-full items-start gap-2 text-sm">
        <div className="flex flex-wrap items-center gap-2">
          {post.tags.map((tag, i) => (
            <Tag key={i} tag={tag} />
          ))}
        </div>

        <div className="ml-auto flex gap-2 whitespace-nowrap">
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
