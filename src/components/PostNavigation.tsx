import { Post } from '@/types/post';

import LinkHover from '../common/LinkHover';

export type PostNavigationProps = {
  prevPost: Pick<Post, 'title' | 'slug'> | null;
  nextPost: Pick<Post, 'title' | 'slug'> | null;
};

export default function PostNavigation({
  prevPost,
  nextPost,
}: PostNavigationProps) {
  return (
    <div className="text-secondary -mx-4 flex items-center gap-4 text-xs font-semibold sm:mx-0 sm:text-base">
      {prevPost && (
        <LinkHover
          href={prevPost.slug}
          className="flex-1 group gap-3 px-4 py-2"
        >
          <svg
            viewBox="0 0 3 6"
            className="w-fit text-mute h-1.5 overflow-visible group-hover:text-secondary"
          >
            <path
              d="M3 0L0 3L3 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="line-clamp-1">{prevPost.title}</span>
        </LinkHover>
      )}
      {nextPost && (
        <LinkHover
          href={nextPost.slug}
          className="flex-1 group ml-auto gap-3 px-4 py-2 text-right justify-end"
        >
          <span className="line-clamp-1">{nextPost.title}</span>
          <svg
            viewBox="0 0 3 6"
            className="h-1.5 w-auto overflow-visible text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300"
          >
            <path
              d="M0 0L3 3L0 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </LinkHover>
      )}
    </div>
  );
}
