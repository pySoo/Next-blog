import { motion } from 'framer-motion';
import Image from 'next/image';

import { fadeIn, fadeInUp } from '@/constants/animations';

import { IconText, PressedEffect } from '../common';
import { CalendarIcon } from '../icons';

export type PostPressedCardProps = {
  href: string;
  imgUrl: string;
  title: string;
  date: string;
  isDraft?: boolean;
};

export default function PostPressedCard({
  href,
  imgUrl,
  title,
  date,
  isDraft,
}: PostPressedCardProps) {
  return (
    <motion.div variants={fadeInUp} whileHover={{ scale: isDraft ? 1 : 1.02 }}>
      <PressedEffect>
        <motion.a href={isDraft ? undefined : href} variants={fadeInUp}>
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            exit="exit"
            viewport={{ amount: 0.08, once: true }}
            className={`overflow-hidden rounded-xl bg-neutral-200 dark:bg-neutral-800 ${
              isDraft ? 'cursor-not-allowed' : ''
            }`}
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
              <div className="p-6 sm:h-[128px]">
                <div className="mb-2 flex w-full items-end">
                  <IconText Icon={CalendarIcon} text={date} />
                </div>
                <p className="text-xl font-bold tracking-tight md:text-lg line-clamp-2">
                  {title}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.a>
      </PressedEffect>
    </motion.div>
  );
}
