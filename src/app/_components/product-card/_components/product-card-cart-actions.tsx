'use client';
import { Button } from '@/components/ui/button';
import { STORE_ROUTE_PRODUCT } from '@/lib/constants';
import { Product } from '@/lib/shopify/types';
import { LinkProps } from 'react-aria-components';

export type ProductCardCartActionsProps = LinkProps & {
  product: Product;
};

export const ProductCardCartActions = ({ product, ...props }: ProductCardCartActionsProps) => {
  const productUrl = `${STORE_ROUTE_PRODUCT}/${product.handle}`;

  return (
    <div className="space-y-3">
      <Button block color={'primary'}>
        Add to cart
      </Button>
      <Button block variant={'outline'}>
        Quick view
      </Button>
    </div>
  );
};
