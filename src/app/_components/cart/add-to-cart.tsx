'use client';

import { useProduct } from '@/app/store/product/[handle]/_components/product-context';
import { Button } from '@/components/ui/button';
import { ButtonIcon } from '@/components/ui/button-icon';
import { Product, ProductVariant } from '@/lib/shopify/types';
import { useActionState } from 'react';
import { addItem } from './actions';
import { useCart } from './cart-context';

function SubmitButton({
  availableForSale,
  selectedVariantId
}: {
  availableForSale: boolean;
  selectedVariantId: string | undefined;
}) {
  if (!availableForSale) {
    return (
      <Button block isDisabled variant={'filled'} color={'primary'}>
        Out Of Stock
      </Button>
    );
  }

  return (
    <Button
      size={'lg'}
      type={!selectedVariantId ? 'button' : 'submit'}
      block
      isDisabled={!selectedVariantId}
      aria-label={!selectedVariantId ? 'Please select an option' : 'Add to bag'}
      leftIcon="shopping-bag"
      variant={'filled'}
      color={'primary'}
    >
      {!selectedVariantId ? 'Please select an option' : 'Add to bag'}
    </Button>
  );
}

export function AddToCart({ product }: { product: Product }) {
  const { variants, availableForSale } = product;
  const { addCartItem } = useCart();
  const { state } = useProduct();
  const [message, formAction] = useActionState(addItem, null);

  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every((option) => option.value === state[option.name.toLowerCase()])
  );
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const selectedVariantId = variant?.id || defaultVariantId;
  const actionWithVariant = formAction.bind(null, selectedVariantId);
  const finalVariant = variants.find((variant) => variant.id === selectedVariantId)!;

  return (
    <div className="flex w-full flex-col gap-x-2 gap-y-4 lg:flex-row lg:gap-y-0">
      <form
        className="w-full"
        action={async () => {
          addCartItem(finalVariant, product);
          actionWithVariant();
        }}
      >
        <SubmitButton availableForSale={availableForSale} selectedVariantId={selectedVariantId} />
        <p aria-live="polite" className="sr-only" role="status">
          {message}
        </p>
      </form>
      <div className="hidden lg:flex">
        <ButtonIcon size={'lg'} icon="heart" />
      </div>
      <div className="flex lg:hidden">
        <Button size={'lg'} variant={'outline'} block>
          Save for later
        </Button>
      </div>
    </div>
  );
}
