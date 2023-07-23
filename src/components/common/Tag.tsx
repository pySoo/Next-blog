import title from 'title';

import Pill from './Pill';

export default function Tag({ tag }: { tag: string }) {
  return <Pill>{title(tag)}</Pill>;
}
