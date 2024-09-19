'use client';

import { useProduct, useUpdateURL } from '@/app/store/product/[handle]/_components/product-context';
import { ButtonIcon } from '@/components/ui/button-icon';
import { type Image as ShopifyImage, Product } from '@/lib/shopify/types';
import { clsx } from '@/utils';
import Image from 'next/image';
import { useState } from 'react';

type ProductImagesProps = {
  product: Product;
  thumbnailDirection?: 'vertical' | 'horizontal';
};

export const ProductImages = ({
  product,
  thumbnailDirection = 'vertical',
  ...props
}: ProductImagesProps) => {
  const { images: productImages } = product;

  const images = productImages.slice(0, 5).map((image: ShopifyImage) => ({
    src: image.url,
    altText: image.altText
  }));

  const { state, updateImage } = useProduct();
  const updateURL = useUpdateURL();
  const imageIndex = state.image ? parseInt(state.image) : 0;

  const nextImageIndex = imageIndex + 1 < images.length ? imageIndex + 1 : 0;
  const previousImageIndex = imageIndex === 0 ? images.length - 1 : imageIndex - 1;
  const [nextImageUrl, setNextImageUrl] = useState(nextImageIndex);
  const [previousImageUrl, setPreviousImageUrl] = useState(previousImageIndex);

  return (
    <form
      className={clsx(
        'w-full gap-x-4 lg:flex',
        thumbnailDirection === 'vertical' ? 'flex-row-reverse' : 'flex-col'
      )}
    >
      <div className="aspect-h-1 aspect-w-1 relative flex-1 overflow-hidden bg-white lg:rounded-card">
        {images[imageIndex] && (
          <Image
            className="object-contain object-center"
            width={900}
            height={900}
            sizes="(min-width: 1024px) 66vw, 100vw"
            alt={images[imageIndex]?.altText as string}
            src={images[imageIndex]?.src as string}
            priority={true}
          />
        )}

        {images.length > 1 ? (
          <div className="absolute right-0 top-0 inline-flex items-start justify-end p-4">
            <div className="inline-flex items-center gap-x-2">
              <ButtonIcon
                rounded
                icon="chevron-left"
                onPress={() => {
                  const newState = updateImage(previousImageIndex.toString());
                  updateURL(newState);
                }}
                aria-label="Previous product image"
              />
              <ButtonIcon
                rounded
                icon="chevron-right"
                onPress={() => {
                  const newState = updateImage(nextImageIndex.toString());
                  updateURL(newState);
                }}
                aria-label="Next product image"
              />
            </div>
          </div>
        ) : null}
      </div>

      {images.length > 1 ? (
        <div
          className={clsx(
            'hidden sm:flex',
            thumbnailDirection === 'vertical' ? 'mt-4 lg:mt-0' : 'mt-4'
          )}
        >
          <ul
            className={clsx(
              'flex items-center overflow-auto',
              thumbnailDirection === 'vertical' ? 'gap-4 lg:flex-col' : 'gap-2 lg:flex-row'
            )}
          >
            {images.map((image, index) => {
              const isActive = index === imageIndex;

              return (
                <li key={image.src}>
                  <button
                    formAction={() => {
                      const newState = updateImage(index.toString());
                      updateURL(newState);
                    }}
                    aria-label="Select product image"
                    className="flex size-16 items-center justify-center overflow-hidden rounded-md bg-white sm:size-24"
                  >
                    <Image alt={image.altText} src={image.src} width={80} height={80} />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </form>
  );
};
