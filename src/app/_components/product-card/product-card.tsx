'use client';
import { Product } from '@/lib/shopify/types';
import { clsx } from '@/utils';
import { Group } from 'react-aria-components';
import { ProductCardCartActions } from './_components/product-card-cart-actions';
import { ProductCardHoverActions } from './_components/product-card-hover-actions';
import { ProductCardImage } from './_components/product-card-image';
import { ProductCardPrice } from './_components/product-card-price';
import { ProductCardTitle } from './_components/product-card-title';
import { ProductCardVendor } from './_components/product-card-vendor';

export type ProductCardProps = {
  product: Product;
  showCartActions?: boolean;
  className?: string;
};

export const ProductCard = ({
  product,
  showCartActions = false,
  className,
  ...props
}: ProductCardProps) => {
  return (
    <Group className={clsx('group relative w-full overflow-hidden', className)}>
      <div className="absolute right-2 top-2 z-10">
        <div className="transition-all duration-150 ease-out animate-in fade-in fill-mode-forwards group-[hovered=true]:slide-in-from-right-4">
          <ProductCardHoverActions product={product} />
        </div>
      </div>
      <div className="overflow-hidden rounded-card bg-white">
        <ProductCardImage product={product} />
      </div>
      <div className="space-y-3 py-4">
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
