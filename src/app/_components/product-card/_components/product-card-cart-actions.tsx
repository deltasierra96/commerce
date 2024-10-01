'use client';
import { ProductFragment } from '@/__generated__/graphql';
import { Button } from '@/components/ui/button';
import { STORE_ROUTE_PRODUCT } from '@/lib/constants';
import { LinkProps } from 'react-aria-components';
import { ProductCardQuickView } from './product-card-quick-view';

export type ProductCardCartActionsProps = LinkProps & {
  product: ProductFragment;
};

export const ProductCardCartActions = ({ product, ...props }: ProductCardCartActionsProps) => {
  const productUrl = `${STORE_ROUTE_PRODUCT}/${product.handle}`;

  return (
    <div className="space-y-3">
      <Button block color={'primary'}>
        Add to cart
      </Button>

      <ProductCardQuickView product={product} />
    </div>
  );
};
