import Image from 'next/image';

import { $ } from '@/libs/core';

export default function LogoIcon({ className }: React.ComponentProps<'img'>) {
  return (
    <div className="shrink-0 cursor-pointer">
      <Image
        className={$(className)}
        src="/gif/sunflowers.webp"
        width={40}
        height={40}
        alt="logo"
      />
    </div>
  );
}
