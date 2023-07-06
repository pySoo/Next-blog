import { motion } from 'framer-motion';
import Image from 'next/image';

import IconText from '@/common/IconText';
import { fadeInUp } from '@/constants/animations';

import CalendarIcon from './icons/CalendarIcon';

type PostCardType = {
  href: string;
  imgUrl: string;
  title: string;
  date: string;
  isDraft?: boolean;
};

export default function PostCard({
  href,
  imgUrl,
  title,
  date,
  isDraft,
}: PostCardType) {
  return (
    <motion.a
      href={isDraft ? undefined : href}
      className={`overflow-hidden rounded-xl bg-neutral-200 dark:bg-neutral-800 ${
        isDraft ? 'cursor-not-allowed' : ''
      }`}
      variants={fadeInUp}
      whileHover={{ scale: isDraft ? 1 : 1.02 }}
      whileTap={{ scale: isDraft ? 1 : 0.98 }}
    >
      <div className={`${isDraft ? 'opacity-50' : 'opacity-100'}`}>
        <Image
          src={imgUrl}
          alt={title}
          width={300}
          height={300}
          className={'h-64 w-full object-cover'}
          draggable={false}
        />
        <div className="p-6">
          <div className="mb-2 flex w-full items-end">
            <IconText Icon={CalendarIcon} text={date} />
          </div>
          <p className="text-xl font-bold tracking-tight md:text-lg">{title}</p>
        </div>
      </div>
    </motion.a>
  );
}
