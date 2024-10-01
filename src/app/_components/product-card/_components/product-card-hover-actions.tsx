'use client';
import { ProductFragment } from '@/__generated__/graphql';
import { ButtonIcon } from '@/components/ui/button-icon';

export type ProductCardHoverActionsProps = {
  product: ProductFragment;
};

export const ProductCardHoverActions = ({ product, ...props }: ProductCardHoverActionsProps) => {
  return (
    <div className="flex flex-col items-center gap-y-2">
      <ButtonIcon icon="heart" />
      <ButtonIcon icon="share" />
    </div>
  );
};
