'use client';
import { ProductFragment } from '@/__generated__/graphql';

export type ProductVendorProps = {
  product: ProductFragment;
};

export const ProductVendor = ({ product, ...props }: ProductVendorProps) => {
  console.log('product', product);
  return (
    <p className="text-base font-medium text-primary-500" {...props}>
      {product.vendor}
    </p>
  );
};
