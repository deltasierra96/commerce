import { notFound } from 'next/navigation';

import { AddToCart } from '@/app/_components/cart/add-to-cart';
import { GridTileImage } from '@/app/_components/grid/tile';
import { HIDDEN_PRODUCT_TAG, PRODUCT_PATH } from '@/app/constants';
import { ProductProvider } from '@/app/product/[handle]/_components/product-context';
import { Container } from '@/components/ui/container';
import { getProduct } from '@/shopify/getProduct';
import { getProductRecommendations } from '@/shopify/getProductRecommendation';
import { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import { ProductDetails } from './_components/product-details';
import { ProductImages } from './_components/product-images';
import { ProductPrice } from './_components/product-price';
import { ProductRating } from './_components/product-rating';
import { ProductShare } from './_components/product-share';
import { ProductStock } from './_components/product-stock';
import { ProductTitle } from './_components/product-title';
import { ProductVariantSelector } from './_components/product-variant-selector';
import { ProductVendor } from './_components/product-vendor';

export async function generateMetadata({
  params
}: {
  params: { handle: string };
}): Promise<Metadata> {
  const product = await getProduct(params.handle);
  console.log('product', product);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable
      }
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt
            }
          ]
        }
      : null
  };
}

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.featuredImage?.url,
    offers: {
      '@type': 'AggregateOffer',
      availability: product.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount
    }
  };

  return (
    <ProductProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd)
        }}
      />
      <Container className="max-sm:px-0 sm:py-6 lg:py-12">
        <div className="space-y-4">
          <div className="space-y-0 max-sm:divide-y max-sm:divide-neutral-100 lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 lg:space-y-0 xl:gap-x-6">
            <div className="lg:col-span-4 lg:row-end-1">
              <Suspense
                fallback={
                  <div className="aspect-square relative h-full max-h-[550px] w-full overflow-hidden" />
                }
              >
                <ProductImages product={product} />
              </Suspense>
            </div>

            <div className="mx-auto w-full lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:max-w-none">
              <div className="bg-white p-4 sm:p-8 lg:rounded-card">
                <Suspense fallback={null}>
                  <div className="space-y-4 sm:space-y-8">
                    <div className="space-y-4 lg:space-y-6">
                      <div className="space-y-2 sm:space-y-4">
                        <ProductVendor product={product} />
                        <ProductTitle product={product} />
                        <ProductRating />
                        <ProductStock product={product} />
                      </div>
                      <div>
                        <h2 className="sr-only">Product information</h2>
                        <ProductPrice product={product} />
                      </div>
                    </div>

                    <div className="space-y-6">
                      <ProductVariantSelector product={product} />
                      <AddToCart product={product} />
                    </div>
                    <ProductShare />
                  </div>
                </Suspense>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 lg:rounded-card">
            <ProductDetails product={product} />
          </div>

          <RelatedProducts id={product.id} />
        </div>
      </Container>
    </ProductProvider>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);
  if (!relatedProducts?.length) return null;

  return (
    <div className="py-8">
      <h2 className="mb-4 text-2xl font-bold">Related Products</h2>
      <ul className="flex w-full gap-4 overflow-x-auto pt-1">
        {relatedProducts.map((product) => {
          return (
            <li
              key={product.handle}
              className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
            >
              <Link
                className="relative h-full w-full"
                href={`${PRODUCT_PATH}/${product.handle}`}
                prefetch={true}
              >
                <GridTileImage
                  alt={product.title}
                  label={{
                    title: product.title,
                    amount: product.priceRange.maxVariantPrice.amount,
                    currencyCode: product.priceRange.maxVariantPrice.currencyCode
                  }}
                  src={product.featuredImage?.url}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
