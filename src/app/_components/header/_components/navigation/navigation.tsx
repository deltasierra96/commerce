'use client';
import { STORE_ROUTE_COLLECTION } from '@/routes';
import { clsx } from '@/utils';
import { Link } from 'react-aria-components';

const navigation = [
  { name: 'Men', href: STORE_ROUTE_COLLECTION, current: false },
  { name: 'Women', href: STORE_ROUTE_COLLECTION, current: false },
  { name: 'Accessories', href: STORE_ROUTE_COLLECTION, current: false },
];

export const Navigation = () => {
  return (
    <nav className='-ml-3 lg:space-x-2' aria-label='Global'>
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={clsx(
            'inline-flex items-center rounded-md px-3 py-2 text-sm font-medium outline-none',
            'text-neutral-900 hover:bg-neutral-100/50 hover:text-neutral-900'
          )}
          aria-current={item.current ? 'page' : undefined}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};
