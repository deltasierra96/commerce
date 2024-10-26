'use client';
import { PRODUCT_PATH } from '@/app/constants';
import { Button } from '@/components/ui/button';
import { Product } from '@/shopify/types';
import { LinkProps } from 'react-aria-components';

export type ProductCardCartActionsProps = LinkProps & {
  product: Product;
};

export const ProductCardCartActions = ({ product, ...props }: ProductCardCartActionsProps) => {
  const productUrl = `${PRODUCT_PATH}/${product.handle}`;

  return (
    <div className="space-y-3">
      <Button block color={'primary'} variant={'outline'}>
        Add to cart
      </Button>

      {/* <ProductCardQuickView product={product} /> */}
    </div>
  );
};
