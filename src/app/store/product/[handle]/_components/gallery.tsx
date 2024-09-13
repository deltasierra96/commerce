'use client';

import { useProduct, useUpdateURL } from '@/app/store/product/[handle]/_components/product-context';
import { ButtonIcon } from '@/components/ui/button-icon';
import Image from 'next/image';
import { useState } from 'react';

export function Gallery({ images }: { images: { src: string; altText: string }[] }) {
  const { state, updateImage } = useProduct();
  const updateURL = useUpdateURL();
  const imageIndex = state.image ? parseInt(state.image) : 0;

  const nextImageIndex = imageIndex + 1 < images.length ? imageIndex + 1 : 0;
  const previousImageIndex = imageIndex === 0 ? images.length - 1 : imageIndex - 1;
  const [nextImageUrl, setNextImageUrl] = useState(nextImageIndex);
  const [previousImageUrl, setPreviousImageUrl] = useState(previousImageIndex);

  return (
    <form className="flex w-full flex-row-reverse gap-x-4">
      <div className="aspect-h-1 aspect-w-1 relative flex-1 overflow-hidden rounded-md bg-white">
        {images[imageIndex] && (
          <Image
            className="object-cover object-center"
            fill
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
                icon="chevron-left"
                onPress={() => {
                  const newState = updateImage(previousImageIndex.toString());
                  updateURL(newState);
                }}
                aria-label="Previous product image"
              />
              <ButtonIcon
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
        <ul className="flex flex-col items-center gap-2 overflow-auto">
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
                  className="flex size-20 overflow-hidden rounded-md bg-white"
                >
                  <Image alt={image.altText} src={image.src} width={80} height={80} />
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </form>
  );
}
