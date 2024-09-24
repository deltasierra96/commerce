'use client';
import { ButtonIcon } from '@/components/ui/button-icon';
import { Product } from '@/lib/shopify/types';
import { Group } from 'react-aria-components';
import { ProductCardCartActions } from './_components/product-card-cart-actions';
import { ProductCardImage } from './_components/product-card-image';
import { ProductCardPrice } from './_components/product-card-price';
import { ProductCardTitle } from './_components/product-card-title';
import { ProductCardVendor } from './_components/product-card-vendor';

export type ProductCardProps = {
  product: Product;
  showCartActions?: boolean;
};

export const ProductCard = ({ product, showCartActions = false, ...props }: ProductCardProps) => {
  return (
    <Group className="group relative w-full rounded-card border border-neutral-100 bg-white transition-colors duration-75 hover:border-neutral-200">
      <div className="absolute right-2 top-2 z-10">
        <ButtonIcon icon="heart" />
      </div>
      <div className="overflow-hidden rounded-card bg-white">
        <ProductCardImage product={product} />
      </div>
      <div className="space-y-3 p-4">
        <div className="flex flex-col gap-y-1">
          <ProductCardVendor product={product} />
          <ProductCardTitle product={product} />
        </div>
        <ProductCardPrice product={product} />
        {showCartActions ? <ProductCardCartActions product={product} /> : null}
      </div>
    </Group>
  );
};
