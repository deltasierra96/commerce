'use client';
import { PRODUCT_PATH } from '@/app/constants';
import { Button } from '@/components/ui/button';
import { Product } from '@/shopify/types';
import { LinkProps } from 'react-aria-components';
import { ProductCardQuickView } from './product-card-quick-view';

export type ProductCardCartActionsProps = LinkProps & {
  product: Product;
};

export const ProductCardCartActions = ({ product, ...props }: ProductCardCartActionsProps) => {
  const productUrl = `${PRODUCT_PATH}/${product.handle}`;

  return (
    <div className="space-y-3">
      <Button block color={'primary'}>
        Add to cart
      </Button>

      <ProductCardQuickView product={product} />
    </div>
  );
};
