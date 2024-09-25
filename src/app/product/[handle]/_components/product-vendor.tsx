import { Product } from '@/lib/shopify/types';

export type ProductVendorProps = {
  product: Product;
};

export const ProductVendor = ({ product, ...props }: ProductVendorProps) => {
  return (
    <p className="text-base font-medium text-primary-500" {...props}>
      {product.vendor}
    </p>
  );
};
