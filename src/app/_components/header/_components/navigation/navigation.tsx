'use client';
import { STORE_ROUTE_COLLECTION } from '@/lib/constants';
import { clsx } from '@/utils';
import { Link } from 'react-aria-components';

const navigation = [
  { name: 'Men', href: STORE_ROUTE_COLLECTION, current: false },
  { name: 'Women', href: STORE_ROUTE_COLLECTION, current: false },
  { name: 'Accessories', href: STORE_ROUTE_COLLECTION, current: false }
];

export const Navigation = () => {
  return (
    <nav className="hidden flex-1 justify-center sm:flex lg:space-x-6" aria-label="Global">
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={clsx(
            'inline-flex items-center rounded-md px-3 py-8 font-heading text-base font-semibold outline-none',
            'text-neutral-900 hover:text-neutral-500'
          )}
          aria-current={item.current ? 'page' : undefined}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};
