'use client';
import { ButtonIconLink } from '@/components/ui/button-icon';

const social = [
  {
    name: 'Facebook',
    href: '#'
  },
  {
    name: 'Instagram',
    href: '#'
  },
  {
    name: 'Twitter',
    href: '#'
  },
  {
    name: 'GitHub',
    href: '#'
  },
  {
    name: 'YouTube',
    href: '#'
  }
];

export const FooterSocial = () => {
  return (
    <ul className="flex items-center space-x-2">
      {social.map((item) => (
        <li key={item.name}>
          <ButtonIconLink rounded size={'sm'} icon="facebook" href={item.href} />
        </li>
      ))}
    </ul>
  );
};
