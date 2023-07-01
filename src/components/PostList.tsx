import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';

import IconText from '@/common/IconText';
import Tag from '@/common/Tag';
import { getRandomUnsplashImage } from '@/constants/image';
import { $ } from '@/libs/core';
import { ReducedPost } from '@/types/post';

import CalendarIcon from './icons/CalendarIcon';
import ClockIcon from './icons/ClockIcon';

export default function PostList({ post }: { post: ReducedPost }) {
  const href = `/blog/[...slug]`;
  return (
    <div className={$('text-ye group w-full py-4 hover:drop-shadow-base')}>
      <Link as={post.slug} href={href} className="hover:drop-shadow-base">
        <div className="overflow-hidden rounded-xl bg-neutral-200 dark:bg-neutral-800 mb-3">
          <Image
            src={post.image ? post.image : getRandomUnsplashImage()}
            alt={'대표 이미지'}
            width={300}
            height={300}
            className="h-52 w-full object-cover"
            draggable={false}
          />
        </div>
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
