import { Product } from '@/shopify/types';

export type ProductVendorProps = {
  product: Product;
};

export const ProductVendor = ({ product, ...props }: ProductVendorProps) => {
  return (
    <p className="text-theme text-base font-medium" {...props}>
      {product.vendor}
    </p>
  );
};
