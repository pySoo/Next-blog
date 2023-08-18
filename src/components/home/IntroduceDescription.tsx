import { Pill } from '../common';

export default function IntroduceDescription() {
  return (
    <div className="pt-2 flex flex-col justify-between text-tertiary">
      <p>
        반갑습니다 🤗 <br />
        어려운 것을 쉽게 설명하고 싶은 프론트엔드 개발자 박수현입니다.
        <br />
      </p>
      <div className="w-full flex flex-wrap items-center pt-3">
        <span className="mr-1">더 많은 글을 읽어보시려면</span>
        <a href={`https://velog.io/@soopy368`} target="_blank" rel="noreferrer">
          <Pill className="w-fit mr-1">Velog</Pill>
        </a>
        <span>를 방문해주세요!</span>
      </div>
    </div>
  );
}
