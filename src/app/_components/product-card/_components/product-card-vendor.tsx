'use client';
import { PRODUCT_PATH } from '@/app/constants';
import { Product } from '@/shopify/types';
import { Link, LinkProps } from 'react-aria-components';

export type ProductCardVendorProps = LinkProps & {
  product: Product;
};

export const ProductCardVendor = ({ product, ...props }: ProductCardVendorProps) => {
  const productUrl = `${PRODUCT_PATH}/${product.handle}`;

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
