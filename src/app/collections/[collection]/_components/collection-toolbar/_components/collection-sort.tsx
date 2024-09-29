'use client';
import { Select, SelectItem } from '@/components/ui/select';
import { sorting } from '@/lib/constants';
import { createUrl } from '@/lib/utils';
import { usePathname, useSearchParams } from 'next/navigation';

export const CollectionSort = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeKey = sorting.find((sort) => searchParams.get('sort') === sort.slug);
  return (
    <Select
      className={'w-56'}
      hideLabel
      label="Sort by"
      selectedKey={activeKey?.slug}
      // placeholder="Sort by"
    >
      {sorting.map((item) => {
        const q = searchParams.get('q');
        const sort = searchParams.get('sort');
        const limit = searchParams.get('limit');
        const active = limit === item.slug;
        const href = createUrl(
          pathname,
          new URLSearchParams({
            ...(q && { q }),
            ...(limit && { limit }),
            ...(item.slug && item.slug.length && { sort: item.slug })
          })
        );

        return (
          <SelectItem
            isSelected={active}
            key={item.slug}
            id={item.slug!}
            textValue={item.title}
            href={href}
          >
            {item.title}
          </SelectItem>
        );
      })}
    </Select>
  );
};
