'use client';
import { Select, SelectItem } from '@/components/ui/select';
import { COLLECTION_PRODUCTS_LIMIT } from '@/lib/constants';
import { createUrl } from '@/lib/utils';
import { usePathname, useSearchParams } from 'next/navigation';

export const CollectionLimit = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeKey = COLLECTION_PRODUCTS_LIMIT.find(
    (limit) => searchParams.get('limit') === limit.limitAmount
  );
  return (
    <Select hideLabel label="Limit by" selectedKey={activeKey?.limitAmount} placeholder="Limit by">
      {COLLECTION_PRODUCTS_LIMIT.map((item) => {
        const q = searchParams.get('q');
        const sort = searchParams.get('sort');
        const limit = searchParams.get('limit');
        const active = limit === item.limitAmount;
        const href = createUrl(
          pathname,
          new URLSearchParams({
            ...(q && { q }),
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
            {item.limitAmount}
          </SelectItem>
        );
      })}
    </Select>
  );
};
