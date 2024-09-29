'use client';
import { STORE_ROUTE_PRODUCT } from '@/lib/constants';
import { Product } from '@/lib/shopify/types';
import { clsx } from '@/utils';
import Image from 'next/image';
import { Link } from 'react-aria-components';
import { ProductCardQuickView } from './product-card-quick-view';

export type ProductCardImageProps = {
  product: Product;
  showQuickView?: boolean;
};

export const ProductCardImage = ({
  product,
  showQuickView = false,
  ...props
}: ProductCardImageProps) => {
  const productUrl = `${STORE_ROUTE_PRODUCT}/${product.handle}`;

  return (
    <div className="relative flex flex-col items-center justify-end">
      {showQuickView ? (
        <div
          className={clsx(
            'absolute inset-x-0 z-10 w-full',
            'transition-all duration-150 animate-in animate-out fill-mode-forwards',
            'group-data-[hovered=true]:animate-in',
            'animate-out',
            'fade-out-0',
            'group-data-[hovered=true]:slide-in-from-top-2',
            'group-data-[hovered=true]:fade-in-100',
            'slide-out-to-top-2'
          )}
        >
          <ProductCardQuickView product={product} />
        </div>
      ) : null}
      <Link
        href={productUrl}
        className={clsx(
          'relative block aspect-1 w-full overflow-hidden rounded-lg bg-white outline-none transition-all',
          'duration-150 fill-mode-forwards',
          'group-data-[hovered=true]:opacity-70'
        )}
      >
        <Image
          width={280}
          height={280}
          src={product.featuredImage.url}
          alt={product.featuredImage.altText || product.title}
          className="h-full w-full object-cover object-center"
        />
      </Link>
    </div>
  );
};
