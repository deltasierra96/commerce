'use client';

import { useProduct } from '@/app/store/product/[handle]/_components/product-context';
import { Button } from '@/components/ui/button';
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

  if (!selectedVariantId) {
    return (
      <Button
        size={'lg'}
        block
        isDisabled
        aria-label="Please select an option"
        variant={'filled'}
        color={'primary'}
      >
        Add To Cart
      </Button>
    );
  }

  return (
    <Button
      size={'lg'}
      type="submit"
      block
      aria-label="Add to cart"
      variant={'filled'}
      color={'primary'}
    >
      Add To Cart
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
    <form
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
  );
}
