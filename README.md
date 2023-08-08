# Next.js로 제작한 기술 블로그

Next.js를 이용하여 서버 사이드 렌더링(SSR)를 공부하기 위해 제작한 블로그입니다.

## Site Link

https://enjoydev.life

## Tech Stack

<div align=center>

|     Area     |                                                                                                                                                                                                                                                                                                                                                                                                                                         Tech Stack                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| :----------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| **Frontend** | <img src="https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=Next.js&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=black"> <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?&style=for-the-badge&logo=TailwindCSS&logoColor=white"> <img src="https://img.shields.io/badge/ESLINT-4B32C3?&style=for-the-badge&logo=ESLint&logoColor=white"> <img src="https://img.shields.io/badge/PRETTIER-F7B93E?&style=for-the-badge&logo=Prettier&logoColor=white"> <img src="https://img.shields.io/badge/HUSKY-000000?&style=for-the-badge&logo=Husky&logoColor=white"> <img src="https://img.shields.io/badge/Vercel-000000.svg?style=for-the-badge&logo=Vercel&logoColor=white"> |

</div>

## Features

- contentlayer를 이용한 mdx 파일 관리 및 포스팅
- TOC(Table of Contents) 구현
- 댓글 기능
- 포스트 검색 기능

- 다크 모드 지원
- 반응형 디자인
- 사이트맵 생성 및 구글 검색 엔진 등록
- 구글 Analytics 연동

## Project Structure

```
📦 src
├── 📂 components
│   ├── 📂 common
│   ├── 📂 contents
|   ├── 📂 home
│   ├── 📂 icons
│   ├── 📂 mdx
│   ├── 📂 post
│   ├── 📂 series
│   └── 📂 snippet
├── 📂 constants
├── 📂 layouts
├── 📂 libs
├── 📂 pages
│   ├── 📂 blog
│   ├── 📂 search
│   └── 📂 snippets
├── 📂 styles
└── 📂 types
```

## Getting Started

```bash
yarn dev
```
