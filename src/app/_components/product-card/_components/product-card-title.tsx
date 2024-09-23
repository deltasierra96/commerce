'use client';
import { STORE_ROUTE_PRODUCT } from '@/lib/constants';
import { Product } from '@/lib/shopify/types';
import { Link, LinkProps } from 'react-aria-components';

export type ProductCardTitleProps = LinkProps & {
  product: Product;
  showCurrencyCode?: boolean;
};

export const ProductCardTitle = ({
  product,
  showCurrencyCode = false,
  ...props
}: ProductCardTitleProps) => {
  const productUrl = `${STORE_ROUTE_PRODUCT}/${product.handle}`;

  return (
    <Link
      {...props}
      href={productUrl}
      className={'line-clamp-1 truncate text-base font-medium outline-none hover:underline'}
    >
      <h3>{product.title}</h3>
    </Link>
  );
};
