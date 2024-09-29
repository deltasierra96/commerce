'use client';
import { Select, SelectItem } from '@/components/ui/select';
import { sorting } from '@/lib/constants';
import { createUrl } from '@/lib/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCollection } from '../../../collection-context';

export const CollectionSort = () => {
  const collection = useCollection();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <Select
      className={'w-56'}
      hideLabel
      label="Sort by"
      defaultSelectedKey={0}
      placeholder="Sort by"
    >
      {sorting.map((item) => {
        const active = searchParams.get('sort') === item.slug;
        const q = searchParams.get('q');
        const href = createUrl(
          pathname,
          new URLSearchParams({
            ...(q && { q }),
            ...(item.slug && item.slug.length && { sort: item.slug })
          })
        );
        return (
          <SelectItem key={item.sortKey} href={href}>
            {item.title}
          </SelectItem>
        );
      })}
    </Select>
  );
};
