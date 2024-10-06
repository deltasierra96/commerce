'use client';
import { Product } from '@/shopify/types';
import { clsx } from '@/utils';
import { motion } from 'framer-motion';
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
  showCartActions = true,
  className,
  ...props
}: ProductCardProps) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Group className={clsx('group relative w-full overflow-hidden', className)}>
        <div className="absolute right-4 top-4 z-10">
          <div
            className={clsx(
              'duration-150 animate-in animate-out fill-mode-forwards',
              'group-data-[hovered=true]:animate-in',
              'animate-out',
              'fade-out-0',
              'group-data-[hovered=true]:slide-in-from-right-2',
              'group-data-[hovered=true]:fade-in-100',
              'slide-out-to-right-2'
            )}
          >
            <ProductCardHoverActions product={product} />
          </div>
        </div>
        <div className="overflow-hidden rounded-card bg-white py-4">
          <ProductCardImage product={product} />
        </div>
        <div className="space-y-3 pb-4">
          <div className="flex flex-col gap-y-1">
            <ProductCardVendor product={product} />
            <ProductCardTitle product={product} />
          </div>
          <ProductCardPrice product={product} />
          {showCartActions ? (
            <div className="max-lg:hidden">
              <ProductCardCartActions product={product} />
            </div>
          ) : null}
        </div>
      </Group>
    </motion.div>
  );
};
