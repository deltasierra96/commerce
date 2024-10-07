'use client';
import { PRODUCT_PATH } from '@/app/constants';
import { Product } from '@/shopify/types';
import { Link, LinkProps } from 'react-aria-components';

export type ProductCardTitleProps = LinkProps & {
  product: Product;
};

export const ProductCardTitle = ({ product, ...props }: ProductCardTitleProps) => {
  const productUrl = `${PRODUCT_PATH}/${product.handle}`;

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
