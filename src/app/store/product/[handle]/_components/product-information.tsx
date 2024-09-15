import { AddToCart } from '@/app/_components/cart/add-to-cart';
import Prose from '@/app/_components/prose';
import { Product } from '@/lib/shopify/types';
import { ProductPrice } from './product-price';
import { ProductStock } from './product-stock';
import { ProductTitle } from './product-title';
import { ProductVariantSelector } from './product-variant-selector';
import { ProductVendor } from './product-vendor';

export function ProductInformation({ product }: { product: Product }) {
  return (
    <div>
      <div className="space-y-2">
        <ProductTitle product={product} />
        <ProductVendor product={product} />
        <ProductStock product={product} />
      </div>
      <div className="mt-3">
        <h2 className="sr-only">Product information</h2>
        <ProductPrice product={product} />
      </div>

      <ProductVariantSelector product={product} />
      {product.descriptionHtml ? (
        <Prose className="mb-6 text-sm leading-tight" html={product.descriptionHtml} />
      ) : null}
      <AddToCart product={product} />
    </div>
  );
}
