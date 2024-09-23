import { ButtonIcon } from '@/components/ui/button-icon';
import { Product } from '@/lib/shopify/types';
import { ProductCardImage } from './_components/product-card-image';
import { ProductCardPrice } from './_components/product-card-price';
import { ProductCardTitle } from './_components/product-card-title';

export type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product, ...props }: ProductCardProps) => {
  return (
    <div className="relative w-full">
      <div className="absolute right-2 top-2 z-10">
        <ButtonIcon size={'sm'} icon="heart" />
      </div>
      <div className="overflow-hidden rounded-card bg-white">
        <ProductCardImage product={product} />
      </div>
      <div className="mt-2 space-y-2">
        <ProductCardTitle product={product} />
        <ProductCardPrice product={product} />
      </div>
    </div>
  );
};
