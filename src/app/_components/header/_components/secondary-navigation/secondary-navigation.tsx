'use client';
import { Container } from '@/components/ui/container';
import { Link } from 'react-aria-components';

const secondaryLinks = [
  {
    id: '1',
    name: 'Account',
    href: '/'
  },
  {
    id: '2',
    name: 'Accessibility Statement',
    href: '/'
  },
  {
    id: '3',
    name: 'Help',
    href: '/'
  },
  {
    id: '4',
    name: 'Email Sign Up',
    href: '/'
  },
  {
    id: '5',
    name: 'Blog',
    href: '/'
  }
];

export const SecondaryNavigation = () => {
  return (
    <div className="bg-neutral-100 text-neutral-900">
      <Container fullWidth>
        <div className="flex justify-end">
          <ul className="flex items-center divide-x divide-neutral-300">
            {secondaryLinks.map((item) => (
              <li className="px-2 py-1.5" key={item.id}>
                <Link
                  className={'px-1 text-sm text-neutral-500 hover:text-neutral-950'}
                  href={item.href}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};
