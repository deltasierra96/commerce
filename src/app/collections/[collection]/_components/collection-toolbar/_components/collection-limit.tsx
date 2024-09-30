'use client';
import { Select, SelectItem } from '@/components/ui/select';
import {
  COLLECTION_PRODUCTS_DEFAULT_LIMIT,
  COLLECTION_PRODUCTS_LIMIT,
  COLLECTION_PRODUCTS_LIMIT_URL_PARAM,
  COLLECTION_PRODUCTS_SORT_URL_PARAM
} from '@/lib/constants';
import { createUrl } from '@/lib/utils';
import { usePathname, useSearchParams } from 'next/navigation';

export const CollectionLimit = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sort = searchParams.get(COLLECTION_PRODUCTS_SORT_URL_PARAM);
  const limit = searchParams.get(COLLECTION_PRODUCTS_LIMIT_URL_PARAM);
  const activeKey =
    COLLECTION_PRODUCTS_LIMIT.find(
      (limit) => searchParams.get(COLLECTION_PRODUCTS_LIMIT_URL_PARAM) === limit.limitAmount
    ) || COLLECTION_PRODUCTS_DEFAULT_LIMIT;

  return (
    <Select
      hideLabel
      className={'min-w-40'}
      label="Limit by"
      selectedKey={activeKey?.limitAmount}
      placeholder="Limit by"
    >
      {COLLECTION_PRODUCTS_LIMIT.sort((a, b) => a.limitAmount.localeCompare(b.limitAmount)).map(
        (item) => {
          const active = limit === item.limitAmount;
          const href = createUrl(
            pathname,
            new URLSearchParams({
              ...(sort && { sort }),
              ...(item.limitAmount && item.limitAmount.length && { limit: item.limitAmount })
            })
          );
          return (
            <SelectItem
              isSelected={active}
              key={item.limitAmount}
              id={item.limitAmount!}
              textValue={item.limitAmount!}
              href={href}
            >
              {`${item.limitAmount} per page`}
            </SelectItem>
          );
        }
      )}
    </Select>
  );
};
