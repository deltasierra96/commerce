import { AddToCart } from '@/app/_components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { Product } from 'lib/shopify/types';
import { VariantSelector } from './variant-selector';

export function ProductInformation({ product }: { product: Product }) {
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight">{product.title}</h1>

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
      {product.descriptionHtml ? (
        <Prose className="mb-6 text-sm leading-tight" html={product.descriptionHtml} />
      ) : null}
      <AddToCart product={product} />
    </>
  );
}
