'use client';
import { STORE_ROUTE_PRODUCT } from '@/lib/constants';
import { Product } from '@/lib/shopify/types';
import Image from 'next/image';
import { Link } from 'react-aria-components';

export type ProductCardImageProps = {
  product: Product;
};

export const ProductCardImage = ({ product, ...props }: ProductCardImageProps) => {
  const productUrl = `${STORE_ROUTE_PRODUCT}/${product.handle}`;

  return (
    <Link href={productUrl} className="block aspect-1 w-full overflow-hidden bg-white outline-none">
      <Image
        width={280}
        height={280}
        src={product.featuredImage.url}
        alt={product.featuredImage.altText || product.title}
        className="h-full w-full object-cover object-center"
      />
    </Link>
  );
};
