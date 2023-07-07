import { $ } from '@/libs/core';

export default function LogoIcon({ className }: React.ComponentProps<'img'>) {
  return (
    <img
      className={$('shrink-0', className)}
      src="/gif/sunflower.gif"
      width="40"
      height="40"
      alt="logo"
    />
  );
}
