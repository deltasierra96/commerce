'use client';
import { AddToCart } from '@/app/_components/cart/add-to-cart';
import { Container } from '@/components/ui/container';
import { Product } from '@/lib/shopify/types';
import { ProductDetails } from './product-details';
import { ProductImages } from './product-images';
import { ProductPrice } from './product-price';
import { ProductStock } from './product-stock';
import { ProductTitle } from './product-title';
import { ProductVariantSelector } from './product-variant-selector';
import { ProductVendor } from './product-vendor';

type ProductViewProps = {
  product: Product;
};

export const ProductView = ({ product, ...props }: ProductViewProps) => {
  console.log('product', product);
  return (
    <Container className="max-w-screen-xl px-0 sm:px-0 sm:py-6 lg:px-6 lg:py-12">
      <div className="space-y-4">
        <div className="space-y-4 lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 lg:space-y-0 xl:gap-x-6">
          <div className="lg:col-span-4 lg:row-end-1">
            <ProductImages product={product} />
          </div>

          <div className="mx-auto w-full lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:max-w-none">
            <div className="bg-white p-4 sm:p-8 lg:rounded-md">
              <div className="space-y-6 lg:space-y-8">
                <div className="space-y-4">
                  <ProductVendor product={product} />
                  <ProductTitle product={product} />
                  <ProductStock product={product} />
                </div>
                <div>
                  <h2 className="sr-only">Product information</h2>
                  <ProductPrice product={product} />
                </div>

                <ProductVariantSelector product={product} />
                <AddToCart product={product} />
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="rounded-card bg-white p-6">
            <ProductDetails product={product} />
          </div>
        </div>
      </div>
    </Container>
  );
};
