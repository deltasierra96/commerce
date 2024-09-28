'use client';
import { STORE_ROUTE_PRODUCT } from '@/lib/constants';
import { Product } from '@/lib/shopify/types';
import Image from 'next/image';
import { Link } from 'react-aria-components';
import { ProductCardQuickView } from './product-card-quick-view';

export type ProductCardImageProps = {
  product: Product;
};

export const ProductCardImage = ({ product, ...props }: ProductCardImageProps) => {
  const productUrl = `${STORE_ROUTE_PRODUCT}/${product.handle}`;

  return (
    <div className="relative flex flex-col items-center justify-end">
      <div className="absolute inset-x-0 z-10 w-full px-4 opacity-0 transition-all duration-75 group-data-[hovered]:opacity-100">
        <ProductCardQuickView product={product} />
      </div>
      <Link
        href={productUrl}
        className="relative block aspect-1 w-full overflow-hidden bg-white outline-none"
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
