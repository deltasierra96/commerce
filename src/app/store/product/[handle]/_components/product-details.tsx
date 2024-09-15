import Prose from '@/app/_components/prose';
import { Product } from '@/lib/shopify/types';

export type ProductDetailsProps = {
  product: Product;
};

export const ProductDetails = ({ product, ...props }: ProductDetailsProps) => {
  return (
    <>
      {product.descriptionHtml ? (
        <Prose className="text-sm leading-tight" html={product.descriptionHtml} {...props} />
      ) : null}
    </>
  );
};
