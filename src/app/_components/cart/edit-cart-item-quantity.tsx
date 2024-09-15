'use client';

import { ButtonIcon } from '@/components/ui/button-icon';
import { CartItem } from '@/lib/shopify/types';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { updateItemQuantity } from './actions';
import { CartUpdateType } from './cart-context';

type SubmitButtonProps = {
  updateType: Omit<CartUpdateType, 'delete'>;
};

function SubmitButton({ updateType }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <ButtonIcon
      size={'sm'}
      compact
      isLoading={pending}
      isDisabled={pending}
      variant={'ghost'}
      icon={updateType === 'increment' ? 'plus' : 'minus'}
      type="submit"
      aria-label={updateType === 'increment' ? 'Increase item quantity' : 'Reduce item quantity'}
    />
  );
}

type EditCartItemQuantityButtonProps = {
  item: CartItem;
  optimisticUpdate: any;
  updateType: CartUpdateType;
};

const EditCartItemQuantityButton = ({
  item,
  updateType,
  optimisticUpdate
}: EditCartItemQuantityButtonProps) => {
  const [message, formAction] = useActionState(updateItemQuantity, null);

  const payload = {
    merchandiseId: item.merchandise.id,
    quantity: updateType === 'increment' ? item.quantity + 1 : item.quantity - 1
  };

  const actionWithVariant = formAction.bind(null, payload);

  return (
    <form
      action={async () => {
        optimisticUpdate(payload.merchandiseId, updateType);
        actionWithVariant();
      }}
    >
      <SubmitButton updateType={updateType} />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
};

type EditCartItemQuantityProps = {
  item: CartItem;
  updateCartItem: any;
};

export const EditCartItemQuantity = ({ item, updateCartItem }: EditCartItemQuantityProps) => {
  return (
    <div className="inline-flex items-center space-x-2 rounded-button border-input border-neutral-200 bg-white p-0.5">
      <EditCartItemQuantityButton
        item={item}
        updateType="decrement"
        optimisticUpdate={updateCartItem}
      />
      <p className="pointer-events-none w-full select-none text-center text-sm">{item.quantity}</p>
      <EditCartItemQuantityButton
        item={item}
        updateType="increment"
        optimisticUpdate={updateCartItem}
      />
    </div>
  );
};
