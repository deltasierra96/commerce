import { ButtonIconLink } from '@/components/ui/button-icon';
import { IconTypeProps } from '@/components/ui/icon';

export type ProductShareProps = Object;

type platform = {
  url: string;
  icon: IconTypeProps;
};

const platforms: platform[] = [
  {
    icon: 'facebook',
    url: 'https://www.facebook.com/sharer.php?u='
  },
  {
    icon: 'twitter',
    url: 'https://twitter.com/share?text='
  },
  {
    icon: 'mail',
    url: 'mailto:?&subject='
  }
];

export const ProductShare = ({ ...props }: ProductShareProps) => {
  return (
    <ul className="flex flex-wrap space-x-2" {...props}>
      {platforms.map((platform, i) => (
        <li key={i}>
          <ButtonIconLink
            compact
            variant={'filled'}
            size={'default'}
            rounded
            icon={platform.icon}
            href={platform.url}
          />
        </li>
      ))}
    </ul>
  );
};
