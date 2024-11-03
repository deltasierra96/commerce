'use client';
import {
  COLLECTION_PRODUCTS_DEFAULT_LIMIT,
  COLLECTION_PRODUCTS_LIMIT,
  COLLECTION_PRODUCTS_LIMIT_URL_PARAM,
  COLLECTION_PRODUCTS_SORT_URL_PARAM
} from '@/app/constants';
import { Select, SelectItem } from '@/components/ui/select';
import { createUrl } from '@/shopify/lib/utils';
import { usePathname, useSearchParams } from 'next/navigation';

export const CollectionLimit = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sort = searchParams.get(COLLECTION_PRODUCTS_SORT_URL_PARAM);
  const limit = searchParams.get(COLLECTION_PRODUCTS_LIMIT_URL_PARAM);

  const activeKey =
    COLLECTION_PRODUCTS_LIMIT.find(
      (limit) => searchParams.get(COLLECTION_PRODUCTS_LIMIT_URL_PARAM) === limit.toString()
    ) || COLLECTION_PRODUCTS_DEFAULT_LIMIT;

  return (
    <Select
      hideLabel
      className={'min-w-40'}
      label="Limit by"
      selectedKey={activeKey.toString()}
      placeholder="Limit by"
    >
      {COLLECTION_PRODUCTS_LIMIT.sort((a, b) => a - b).map((limitItem) => {
        const limitString = limitItem.toString();

        const active = limit === limitString;
        const href = createUrl(
          pathname,
          new URLSearchParams({
            ...(sort && { sort }),
            ...(limitItem && { limit: limitString })
          })
        );
        return (
          <SelectItem
            isSelected={active}
            key={limitString}
            id={limitString!}
            textValue={limitString}
            href={href}
          >
            {`${limitString} per page`}
          </SelectItem>
        );
      })}
    </Select>
  );
};
