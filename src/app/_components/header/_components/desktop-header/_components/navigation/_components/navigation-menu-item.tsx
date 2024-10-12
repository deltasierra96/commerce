'use client';
import { MenuItem } from '@/shopify/types';
import { clsx } from '@/utils';
import { Link } from 'react-aria-components';

type NavigationMenuItemProps = {
  item: MenuItem;
};

export const NavigationMenuItem = ({ item }: NavigationMenuItemProps) => {
  return (
    <div className="group relative inline-flex items-center">
      <Link
        key={item.url}
        href={item.url}
        className={clsx(
          'flex items-center rounded-md px-3 py-2 text-sm font-medium text-neutral-950 outline-none transition-colors duration-75 hover:bg-neutral-100'
        )}
      >
        {item.title}
      </Link>

      {item.items ? (
        <ul className="absolute top-0 flex min-w-56 flex-col bg-white p-4 opacity-0 transition-all group-data-[hovered=true]:opacity-100">
          {item.items.map((subItem) => (
            <li key={subItem.id}>
              <Link href={subItem.url}>{subItem.title}</Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
