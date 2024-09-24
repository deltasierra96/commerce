'use client';
import { STORE_ROUTE_PRODUCT } from '@/lib/constants';
import { Product } from '@/lib/shopify/types';
import { Link, LinkProps } from 'react-aria-components';

export type ProductCardVendorProps = LinkProps & {
  product: Product;
};

export const ProductCardVendor = ({ product, ...props }: ProductCardVendorProps) => {
  const productUrl = `${STORE_ROUTE_PRODUCT}/${product.handle}`;

  return (
    <Link
      {...props}
      href={productUrl}
      className={
        'line-clamp-1 inline-flex truncate text-sm font-light text-neutral-500 outline-none hover:underline'
      }
    >
      {product.vendor}
    </Link>
  );
};
