import { AddToCart } from '@/app/_components/cart/add-to-cart';
import Price from '@/app/_components/price';
import { Product } from '@/lib/shopify/types';
import { ProductStock } from './product-stock';
import { VariantSelector } from './variant-selector';

export function ProductInformation({ product }: { product: Product }) {
  console.log('product', product);
  return (
    <div>
      <div className="space-y-2">
        <h1 className="font-heading text-2xl tracking-normal">{product.title}</h1>
        <p className="text-sm text-primary-500">{product.vendor}</p>
        <ProductStock product={product} />
      </div>
      <div className="mt-3">
        <h2 className="sr-only">Product information</h2>
        <div className="text-3xl tracking-tight">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
      </div>

      <VariantSelector options={product.options} variants={product.variants} />
      {/* {product.descriptionHtml ? (
        <Prose className="mb-6 text-sm leading-tight" html={product.descriptionHtml} />
      ) : null} */}
      <AddToCart product={product} />
    </div>
  );
}
