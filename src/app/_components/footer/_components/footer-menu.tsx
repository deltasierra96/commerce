'use client';

import { Menu, MenuItem } from '@/shopify/types';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function FooterMenuItem({ item }: { item: MenuItem }) {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname === item.url);

  useEffect(() => {
    setActive(pathname === item.url);
  }, [pathname, item.url]);

  return (
    <li>
      <Link
        href={item.url}
        className={clsx(
          'block p-2 text-lg underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-sm',
          {
            'text-black dark:text-neutral-300': active
          }
        )}
      >
        {item.title}
      </Link>
    </li>
  );
}

const FooterMenuBlock = (menuItem: MenuItem) => (
  <div key={menuItem.id}>
    <h3 className="text-sm font-semibold leading-6">
      <Link href={menuItem.url}>{menuItem.title}</Link>
    </h3>
    <ul role="list" className="mt-6 space-y-4">
      {menuItem.items?.map((item) => {
        return (
          <li key={item.id}>
            <Link href={item.url}>{item.title}</Link>
            {item.items?.map((derp) => <div key={derp.id}>{derp.title}</div>)}
          </li>
        );
      })}
    </ul>
  </div>
);

export default function FooterMenu({ menu }: { menu: Menu }) {
  if (menu && !menu.items?.length) return null;
  return (
    <nav>
      <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
        {menu?.items?.map((item: Menu) => {
          return <FooterMenuBlock key={item.id} {...item} />;
        })}
      </div>
    </nav>
  );
}
