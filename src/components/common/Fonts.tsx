import { fontMono, fontSans } from '@/constants/fonts';

export default function Fonts() {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: ${fontSans.style.fontFamily};
          --font-mono: ${fontMono.style.fontFamily};
        }
      `}</style>
    </>
  );
}
