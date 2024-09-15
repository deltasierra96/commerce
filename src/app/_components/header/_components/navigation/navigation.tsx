'use client';
import { STORE_ROUTE_COLLECTION } from '@/lib/constants';
import { clsx } from '@/utils';
import { Link } from 'react-aria-components';

const navigation = [
  { name: 'Exterior', href: STORE_ROUTE_COLLECTION, current: false },
  { name: 'Interior', href: STORE_ROUTE_COLLECTION, current: false },
  { name: 'Paint Correction', href: STORE_ROUTE_COLLECTION, current: false },
  { name: 'Detailing Accessories', href: STORE_ROUTE_COLLECTION, current: false },
  { name: 'License Plates', href: STORE_ROUTE_COLLECTION, current: false },
  { name: 'Wheels', href: STORE_ROUTE_COLLECTION, current: false },
  { name: 'Brands', href: STORE_ROUTE_COLLECTION, current: false },
  { name: 'Blog', href: STORE_ROUTE_COLLECTION, current: false }
];

export const Navigation = () => {
  return (
    <nav className="flex lg:space-x-6" aria-label="Global navigation">
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={clsx(
            'inline-flex items-center rounded-md px-3 py-2 font-heading text-sm font-semibold text-neutral-900 outline-none transition-colors duration-75 hover:bg-neutral-100 hover:text-neutral-700'
          )}
          aria-current={item.current ? 'page' : undefined}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};
