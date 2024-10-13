'use client';

import { Menu, MenuItem } from '@/shopify/types';
import Link from 'next/link';

const FooterMenuBlock = (menuItem: MenuItem) => (
  <div key={menuItem.id}>
    <h3 className="text-sm font-semibold leading-6">
      <Link href={menuItem.url}>{menuItem.title}</Link>
    </h3>
    <ul role="list" className="mt-6 space-y-4">
      {menuItem.items?.map((item) => {
        return (
          <li key={item.id}>
            <Link className="text-sm" href={item.url}>
              {item.title}
            </Link>
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
