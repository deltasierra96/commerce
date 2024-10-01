'use client';
import { ProductFragment } from '@/__generated__/graphql';
import { STORE_ROUTE_PRODUCT } from '@/lib/constants';
import { Link, LinkProps } from 'react-aria-components';

export type ProductCardTitleProps = LinkProps & {
  product: ProductFragment;
};

export const ProductCardTitle = ({ product, ...props }: ProductCardTitleProps) => {
  const productUrl = `${STORE_ROUTE_PRODUCT}/${product.handle}`;

  return (
    <Link
      {...props}
      href={productUrl}
      className={'text-sm font-medium outline-none hover:underline'}
    >
      <h3 className="min-w-0 truncate">{product.title}</h3>
    </Link>
  );
};
