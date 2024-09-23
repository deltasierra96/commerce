'use client';
import { STORE_ROUTE_COLLECTION } from '@/lib/constants';
import { Menu } from '@/lib/shopify/types';
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

export const Navigation = ({ menu }: { menu: Menu[] }) => {
  return (
    <nav className="flex lg:space-x-4" aria-label="Global navigation">
      {menu.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={clsx(
            'inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-neutral-950 outline-none transition-colors duration-75 hover:bg-neutral-100'
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
};
