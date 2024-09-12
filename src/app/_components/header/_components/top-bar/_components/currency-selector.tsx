'use client';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { DropdownItem } from '@/components/ui/list-box';
import { Popover } from '@/components/ui/popover';
import { ListBox, Select as RACSelect } from 'react-aria-components';

export type CurrencyProps = {
  title: string;
};

export type CurrencySelectorProps = {
  currencies?: CurrencyProps[];
};

export const CurrencySelector = ({ currencies }: CurrencySelectorProps) => {
  if (!currencies) return;
  return (
    <RACSelect>
      <Label hidden>Currency</Label>
      <Button rightIcon="chevron-down" compact variant={'ghost'} color="neutral">
        Currency
      </Button>
      <Popover showArrow className="flex max-h-full w-full max-w-44 flex-col p-2">
        <ListBox className="outline-0">
          {currencies.map((currency) => (
            <DropdownItem key={currency.title}>{currency.title}</DropdownItem>
          ))}
        </ListBox>
      </Popover>
    </RACSelect>
  );
};
