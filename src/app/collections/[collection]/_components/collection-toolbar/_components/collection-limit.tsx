'use client';
import { Select, SelectItem } from '@/components/ui/select';
import { limit } from '@/lib/constants';
import { createUrl } from '@/lib/utils';
import { usePathname, useSearchParams } from 'next/navigation';

export const CollectionLimit = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeKey = limit.find((limit) => searchParams.get('limit') === limit.amount);
  return (
    <Select
      className={'w-56'}
      hideLabel
      label="Limit by"
      selectedKey={activeKey?.amount}
      placeholder="Limit by"
    >
      {limit.map((item) => {
        const limit = searchParams.get('limit');
        const active = limit === item.amount;
        const q = searchParams.get('q');
        const sort = searchParams.get('sort');
        const href = createUrl(
          pathname,
          new URLSearchParams({
            ...(q && { q }),
            ...(sort && { sort }),
            ...(item.amount && item.amount.length && { limit: item.amount })
          })
        );
        return (
          <SelectItem
            isSelected={active}
            key={item.amount}
            id={item.amount!}
            textValue={item.amount}
            href={href}
          >
            {item.amount}
          </SelectItem>
        );
      })}
    </Select>
  );
};
