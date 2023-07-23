import dayjs from 'dayjs';
import Link from 'next/link';

import { $ } from '@/libs/core';
import { ReducedPost } from '@/types/post';

import { IconText } from '../common';
import { CalendarIcon, ClockIcon } from '../icons';

export default function SnippetList({ post }: { post: ReducedPost }) {
  return (
    <Link as={post.slug} href={`/snippets/[...slug]`}>
      <div
        className={$(
          'h-full group w-full py-4 transition-all hover:bg-neutral-200 dark:hover:bg-neutral-800',
          'rounded-lg px-4 ring-1 ring-neutral-300 dark:ring-neutral-700',
        )}
      >
        <p className="text-lg font-bold lg:text-xl line-clamp-4">
          {post.title}
        </p>
        <div className="mt-2 w-full flex justify-end gap-2 text-sm">
          <div className="flex gap-2 whitespace-nowrap text-neutral-600 dark:text-neutral-400">
            <IconText
              Icon={CalendarIcon}
              text={dayjs(post.date).format('YY.MM.DD')}
            />
            <IconText Icon={ClockIcon} text={`${post.readingMinutes}분`} />
          </div>
        </div>
      </div>
    </Link>
  );
}
