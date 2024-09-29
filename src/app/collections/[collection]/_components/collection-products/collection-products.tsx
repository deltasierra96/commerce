import { ProductCard } from '@/app/_components/product-card';
import { Product } from '@/lib/shopify/types';
import { clsx } from '@/utils';

type CollectionProductsProps = {
  params: { collection: string };
  reverse?: boolean;
  sortKey?: string;
  products: Product[];
};

export const CollectionProducts = async ({
  products,
  params,
  sortKey,
  reverse,
  ...props
}: CollectionProductsProps) => {
  return (
    <div className="grid grid-flow-row grid-cols-2 border-l border-neutral-100 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
      {products?.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            className={clsx(
              'max-lg:border-b',
              'border-neutral-100 bg-white px-4 transition-all duration-75 lg:mx-0 lg:rounded-lg lg:data-[hovered=true]:shadow-lg',
              'lg:data-[hovered=true]:shadow-neutral-950/5',
              'max-lg:border-b',
              'max-md:odd:border-r',
              'md:border-r',
              'md:[&:nth-child(3)]:border-r-0'
            )}
          />
        );
      })}
    </div>
  );
};
