'use client';

import { BaseCartLine } from '@/__generated__/graphql';
import { ButtonIcon } from '@/components/ui/button-icon';
import { useActionState } from 'react';
import { removeItem } from './actions';

export function DeleteCartItemButton({
  item,
  optimisticUpdate
}: {
  item: BaseCartLine;
  optimisticUpdate: any;
}) {
  const [message, formAction] = useActionState(removeItem, null);
  const merchandiseId = item.merchandise.id;
  const actionWithVariant = formAction.bind(null, merchandiseId);

  return (
    <form
      action={async () => {
        optimisticUpdate(merchandiseId, 'delete');
        await actionWithVariant();
      }}
    >
      {/* <Button size={'sm'} variant={'ghost'} compact type="submit" aria-label="Remove cart item">
        Remove
      </Button> */}
      <ButtonIcon
        icon="trash"
        size={'sm'}
        variant={'ghost'}
        type="submit"
        aria-label="Remove cart item"
      />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
