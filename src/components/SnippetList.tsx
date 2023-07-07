import dayjs from 'dayjs';
import Link from 'next/link';

import IconText from '@/common/IconText';
import { $ } from '@/libs/core';
import { ReducedPost } from '@/types/post';

import CalendarIcon from './icons/CalendarIcon';

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
        <div className="mt-2 inline-flex w-full items-start gap-2 text-sm">
          <div className="flex gap-2 whitespace-nowrap text-neutral-600 dark:text-neutral-400">
            <IconText
              Icon={CalendarIcon}
              text={dayjs(post.date).format('YY.MM.DD')}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
