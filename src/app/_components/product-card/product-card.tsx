'use client';
import { Product } from '@/shopify/types';
import { clsx } from '@/utils';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import { Group as AriaGroup, GroupProps } from 'react-aria-components';
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

const Group = forwardRef<HTMLDivElement, GroupProps>((props, ref) => (
  <AriaGroup {...props} ref={ref} />
));

const MotionGroup = motion(Group);

export const ProductCard = ({
  product,
  showCartActions = true,
  className,
  ...props
}: ProductCardProps) => {
  return (
    <MotionGroup
      className={clsx('group relative w-full overflow-hidden rounded-md bg-white p-4', className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute z-10 right-4 top-4">
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
      <div className="py-4 overflow-hidden bg-white rounded-card">
        <ProductCardImage product={product} />
      </div>
      <div className="pb-4 space-y-3">
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
    </MotionGroup>
  );
};
