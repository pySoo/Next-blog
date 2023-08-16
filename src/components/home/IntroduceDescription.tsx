import { AnimatedContainer, Pill } from '../common';

export default function IntroduceDescription() {
  return (
    <div className="pt-2 flex flex-col sm:flex-row justify-between text-tertiary">
      <p>
        반갑습니다 🤗 <br />
        어려운 것을 쉽게 설명하고 싶은 프론트엔드 개발자 박수현입니다.
        <br />
      </p>
      <span className="pt-[15px] sm:hidden">
        상단의{' '}
        <AnimatedContainer
          className="text-orange-500 font-bold"
          whileTap={{ fontSize: '20px' }}
        >
          해바라기
        </AnimatedContainer>
        를 눌러서 블로그를 구경해 보시죠!
      </span>
      <div className="w-full flex flex-wrap items-center">
        <span className="mr-1">더 많은 글을 읽어보시려면</span>
        <a href={`https://velog.io/@soopy368`} target="_blank" rel="noreferrer">
          <Pill className="w-fit mr-1">Velog</Pill>
        </a>
        <span>를 방문해주세요!</span>
      </div>
    </div>
  );
}
