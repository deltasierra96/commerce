'use client';
import { Container } from '@/components/ui/container';

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
    <div className="bg-primary-500 text-white">
      <Container>
        <div className="flex items-center justify-center py-3">
          <p className="flex-1 text-center text-xs font-medium lg:flex-none">
            Free 30-Day Returns Policy. *Exclusions Apply
          </p>
        </div>
      </Container>
    </div>
  );
};
