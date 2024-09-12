import { AddToCart } from '@/app/_components/cart/add-to-cart';
import Price from '@/app/_components/price';
import { Product } from '@/lib/shopify/types';
import { VariantSelector } from './variant-selector';

export function ProductInformation({ product }: { product: Product }) {
  console.log('product', product);
  return (
    <>
      <h1 className="font-heading text-2xl tracking-tight">{product.title}</h1>
      <p>{product.vendor}</p>
      <p>{product.totalInventory}</p>
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
    </>
  );
}
