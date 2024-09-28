'use client';
import { ProductCard } from '@/app/_components/product-card';
import { Container } from '@/components/ui/container';
import { Product } from '@/lib/shopify/types';
import { clsx } from '@/utils';

type CollectionProductsProps = {
  products: Product[];
};

export const CollectionProducts = ({ products, ...props }: CollectionProductsProps) => {
  return (
    <Container className="px-0 sm:px-0 lg:px-6">
      <div className="grid grid-flow-row grid-cols-2 border-l border-neutral-100 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              className={clsx(
                'border-b border-neutral-100 bg-white px-4 transition-colors duration-75 hover:border-neutral-200 lg:mx-0 lg:rounded-card',
                'max-md:odd:border-r',
                'md:border-r',
                'md:[&:nth-child(3)]:border-r-0'
              )}
            />
          );
        })}
      </div>
    </Container>
  );
};
