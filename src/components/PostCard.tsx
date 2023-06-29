import IconText from '@/common/IconText';
import { fadeInUp } from '@/constants/animations';
import { motion } from 'framer-motion';
import Image from 'next/image';
import CalendarIcon from './icons/CalendarIcon';

type PostCardType = {
  href: string;
  imgUrl: string;
  title: string;
  date: string;
};

export default function PostCard({ href, imgUrl, title, date }: PostCardType) {
  return (
    <motion.a
      href={href}
      className="overflow-hidden rounded-xl bg-neutral-200 dark:bg-neutral-800"
      variants={fadeInUp}
      whileHover={{ scale: 1.02, transformOrigin: 'center' }}
      whileTap={{ scale: 0.98 }}
    >
      <div>
        <Image
          src={imgUrl}
          alt={title}
          width={300}
          height={300}
          className="h-64 w-full object-cover"
          draggable={false}
        />
      </div>
      <div className="p-6">
        <div className="mb-2 flex w-full items-end">
          <IconText Icon={CalendarIcon} text={date} />
        </div>
        <p className="text-xl font-bold tracking-tight md:text-lg">{title}</p>
      </div>
    </motion.a>
  );
}
