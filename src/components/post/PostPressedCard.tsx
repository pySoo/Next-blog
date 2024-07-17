import { motion } from 'framer-motion';
import Image from 'next/image';

import { fadeIn, fadeInUp } from '@/constants/animations';
import { PostPressedCardType } from '@/types/post';

import { AnimatedContainer, IconText, PressedEffect } from '../common';
import { CalendarIcon } from '../icons';

export default function PostPressedCard({
  href,
  imgUrl,
  title,
  date,
}: PostPressedCardType) {
  return (
    <AnimatedContainer variants={fadeInUp} whileHover={{ scale: 1.02 }}>
      <PressedEffect>
        <motion.a href={href} variants={fadeInUp}>
          <AnimatedContainer
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            exit="exit"
            viewport={{ amount: 0.08, once: true }}
            className={`overflow-hidden rounded-xl bg-neutral-200 dark:bg-neutral-800`}
          >
            <div>
              <Image
                src={imgUrl}
                alt={title}
                width={300}
                height={300}
                className={'h-64 w-full object-cover'}
                draggable={false}
                priority
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
          </AnimatedContainer>
        </motion.a>
      </PressedEffect>
    </AnimatedContainer>
  );
}
