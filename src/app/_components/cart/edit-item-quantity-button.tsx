'use client';

import { Button } from '@/components/ui/button';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import type { CartItem } from 'lib/shopify/types';
import { useActionState, useState } from 'react';
import { Group, Input, NumberField } from 'react-aria-components';
import { updateItemQuantity } from './actions';

function SubmitButton({ type }: { type: 'plus' | 'minus' }) {
  return (
    <button
      type="submit"
      aria-label={type === 'plus' ? 'Increase item quantity' : 'Reduce item quantity'}
      className={clsx(
        'ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full p-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80',
        {
          'ml-auto': type === 'minus'
        }
      )}
    >
      {type === 'plus' ? (
        <PlusIcon className="h-4 w-4 dark:text-neutral-500" />
      ) : (
        <MinusIcon className="h-4 w-4 dark:text-neutral-500" />
      )}
    </button>
  );
}

export function EditItemQuantityButton({
  item,
  type,
  optimisticUpdate
}: {
  item: CartItem;
  type: 'plus' | 'minus';
  optimisticUpdate: any;
}) {
  const [message, formAction] = useActionState(updateItemQuantity, null);

  const [showUpdate, setShowUpdate] = useState(false);
  const [derpType, setDerpType] = useState<'plus' | 'minus'>();
  const [qty, setQty] = useState(item.quantity);
  const payload = {
    merchandiseId: item.merchandise.id,
    quantity: qty
  };

  console.log('item', item.quantity);
  const actionWithVariant = formAction.bind(null, payload);

  const formActionDerp = async () => {
    optimisticUpdate(payload.merchandiseId, derpType);
    await actionWithVariant();
  };

  return (
    <form action={formActionDerp}>
      {item.quantity}
      {/* <NumberInput
        label="Edit quantity"
        hideLabel
        onChange={(qty) => {
          if (qty > item.quantity) {
          }
          setShowUpdate(true);
        }}
        value={item.quantity}
        minValue={1}
      /> */}

      <NumberField
        onChange={(qty) => {
          if (qty > item.quantity) {
            setQty(item.quantity + 1);
            setDerpType('plus');
            setShowUpdate(true);
          } else {
            setQty(item.quantity - 1);
            setDerpType('minus');
            setShowUpdate(true);
          }
        }}
        defaultValue={qty}
        minValue={1}
      >
        <Group>
          <Button slot="decrement">-</Button>
          <Input />
          <Button slot="increment">+</Button>
        </Group>
      </NumberField>

      {showUpdate ? <Button type="submit">Update</Button> : null}
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
