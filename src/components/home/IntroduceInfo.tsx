import { motion } from 'framer-motion';

import { staggerHalf } from '@/constants/animations';

import { Pill, Title } from '../common';

export default function IntroduceInfo() {
  return (
    <motion.section
      variants={staggerHalf}
      initial="initial"
      animate="animate"
      className="text-tertiary"
    >
      <Title className="text-primary flex max-[410px]:flex-col">
        <span className="mr-2 pb-1">기억은 기록을 이기지</span>
        <span className="flex">
          <span>못한다</span>
          <span className="ml-2">✍️</span>
        </span>
      </Title>
      <div className="pt-2 flex flex-col sm:flex-row justify-between">
        <div className="w-full h-full">
          <p className="w-full h-full">
            반갑습니다 🤗 <br />
            어려운 것을 쉽게 설명하고 싶은 프론트엔드 개발자 박수현입니다.
            <br />
          </p>
          <p className="pt-[15px] sm:hidden">
            상단의{' '}
            <motion.span
              className="text-orange-500 font-bold"
              whileTap={{ fontSize: '20px' }}
            >
              해바라기
            </motion.span>
            를 눌러서 블로그를 구경해 보시죠!
          </p>

          <div className="w-full flex items-center whitespace-nowrap">
            <span>더 많은 글을 읽어보시려면</span>
            <a
              href={`https://velog.io/@soopy368`}
              target="_blank"
              rel="noreferrer"
            >
              <Pill className="w-fit mx-1">Velog</Pill>
            </a>
            <span>를 방문해주세요!</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
