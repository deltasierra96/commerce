import { Product } from '@/shopify/types';

export type ProductTitleProps = {
  product: Product;
};

export const ProductTitle = ({ product, ...props }: ProductTitleProps) => {
  return (
    <h1 className="font-heading text-2xl tracking-normal sm:text-2xl" {...props}>
      {product.title}
    </h1>
  );
};
