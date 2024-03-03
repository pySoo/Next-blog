# Next.js로 제작한 기술 블로그

글을 쓰는 것과 공유하는 것을 좋아하는 성향으로, 개발 생태계에 기여하기 위해 기술 블로그를 시작하게 되었습니다 🌻

### ✔️ Next.js 선택 이유

- **`SEO 최적화`** 를 통해 더 많은 사용자들에게 블로그를 노출하여 정보 전달
- 정적 컨텐츠를 SSG를 통해 렌더링하여 **`초기 로딩 속도`** 를 개선
- Next.js의 Image 컴포넌트, webp 변환, priority 등의 기능을 활용하여 **`이미지 최적화`** 및 **`LCP 5초 개선`**
- 성능 개선 과정을 블로그에 기록 [Lighthouse로 Next.js 성능 44% 개선하기](https://enjoydev.life/blog/nextjs/3-performance)

<br />

## 🌐 URL

https://enjoydev.life

<br />

## 🛠️ Tech Stack

<div align=center>

|     Area     |                                                                                                                                                                                                                                                                                                                                                                                                                                         Tech Stack                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| :----------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| **Frontend** | <img src="https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=Next.js&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=black"> <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?&style=for-the-badge&logo=TailwindCSS&logoColor=white"> <img src="https://img.shields.io/badge/ESLINT-4B32C3?&style=for-the-badge&logo=ESLint&logoColor=white"> <img src="https://img.shields.io/badge/PRETTIER-F7B93E?&style=for-the-badge&logo=Prettier&logoColor=white"> <img src="https://img.shields.io/badge/HUSKY-000000?&style=for-the-badge&logo=Husky&logoColor=white"> <img src="https://img.shields.io/badge/Vercel-000000.svg?style=for-the-badge&logo=Vercel&logoColor=white"> |

</div>

<br />

## ✨ 주요 기능

- **`contentlayer`** 를 이용한 mdx 파일 관리 및 포스팅
- **`TOC(Table of Contents)`** 구현
- Giscus를 이용한 **`댓글`** 기능
- **`포스트 검색`** 기능
- **`다크 모드`** 지원
- **`반응형 디자인`**
- 사이트맵 생성 및 구글 검색 엔진 등록
- 구글 Analytics 연동

<br />

## 📦 Project Structure

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

## 🚀 Getting Started

```bash
yarn install
```
```bash
yarn dev
```
