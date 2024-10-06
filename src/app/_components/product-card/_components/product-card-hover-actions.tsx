'use client';
import { ButtonIcon } from '@/components/ui/button-icon';
import { Product } from '@/shopify/types';

export type ProductCardHoverActionsProps = {
  product: Product;
};

export const ProductCardHoverActions = ({ product, ...props }: ProductCardHoverActionsProps) => {
  return (
    <div className="flex flex-col items-center gap-y-2">
      <ButtonIcon icon="heart" />
      <ButtonIcon icon="share" />
    </div>
  );
};
