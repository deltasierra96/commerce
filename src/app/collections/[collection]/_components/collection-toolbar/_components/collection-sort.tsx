'use client';
import { Select, SelectItem } from '@/components/ui/select';
import {
  COLLECTION_PRODUCTS_DEFAULT_SORTING,
  COLLECTION_PRODUCTS_LIMIT_URL_PARAM,
  COLLECTION_PRODUCTS_SORT_URL_PARAM,
  COLLECTION_PRODUCTS_SORTING
} from '@/lib/constants';
import { createUrl } from '@/lib/utils';
import { usePathname, useSearchParams } from 'next/navigation';

export const CollectionSort = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sort = searchParams.get(COLLECTION_PRODUCTS_SORT_URL_PARAM);
  const limit = searchParams.get(COLLECTION_PRODUCTS_LIMIT_URL_PARAM);

  const activeKey =
    COLLECTION_PRODUCTS_SORTING.find(
      (sort) => searchParams.get(COLLECTION_PRODUCTS_SORT_URL_PARAM) === sort.slug
    ) || COLLECTION_PRODUCTS_DEFAULT_SORTING;

  return (
    <Select
      className={'w-56'}
      hideLabel
      label="Sort by"
      selectedKey={activeKey?.slug!}
      placeholder="Sort by"
    >
      {COLLECTION_PRODUCTS_SORTING.sort((a, b) => a.title.localeCompare(b.title)).map((item) => {
        const active = sort === item.slug;
        const href = createUrl(
          pathname,
          new URLSearchParams({
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
