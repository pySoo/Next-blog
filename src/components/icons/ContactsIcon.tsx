import GithubIcon from './GithubIcon';
import MailIcon from './MailIcon';
import TagIcon from './TagIcon';
import VelogIcon from './VelogIcon';

const icons: { [key: string]: React.FunctionComponent } = {
  email: MailIcon,
  github: GithubIcon,
  velog: VelogIcon,
};

export default function ContactsIcon({
  contact,
  ...props
}: React.ComponentProps<'svg'> & { contact: string }) {
  const Component = icons[contact] ?? TagIcon;

  return <Component {...props} />;
}
