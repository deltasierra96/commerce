'use client';
import { ButtonIcon } from '@/components/ui/button-icon';
import { Product } from '@/lib/shopify/types';

export type ProductCardHoverActionsProps = {
  product: Product;
};

export const ProductCardHoverActions = ({ product, ...props }: ProductCardHoverActionsProps) => {
  return <ButtonIcon icon="heart" />;
};
