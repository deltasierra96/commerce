'use client';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Collection } from '@/shopify/types';
import { clsx } from '@/utils';
import Image from 'next/image';
import { useState } from 'react';

type CollectionHeaderProps = {
  collection: Collection;
};

export const CollectionHeader = ({ collection }: CollectionHeaderProps) => {
  if (!collection) {
    return;
  }

  const [isVisible, setVisible] = useState(false);

  return (
    <Container>
      <div className="bg-white lg:bg-transparent">
        <div className="relative flex flex-col justify-center md:h-[18rem] lg:h-[15rem] xl:h-[22rem]">
          <div className="overflow-hidden rounded-lg md:absolute md:inset-0">
            {collection.image ? (
              <Image
                height={500}
                width={1920}
                className="h-full w-full object-cover"
                src={collection.image?.url}
                alt={collection.image?.altText!}
              />
            ) : null}
            <div
              className="bg-black/60 bg-blend-overlay md:absolute md:inset-0"
              aria-hidden="true"
            />
          </div>
          <Container className="relative mx-auto py-4 md:py-32 md:text-white">
            <span className="font-heading text-xs uppercase">Men's</span>
            <h1 className="font-heading text-xl uppercase tracking-tight md:text-2xl md:text-white lg:text-4xl">
              {collection.title}
            </h1>
            <p
              className={clsx(
                'mt-2 max-w-4xl text-sm tracking-wide md:mt-6 md:text-white',
                isVisible && 'line-clamp-none',
                !isVisible && 'line-clamp-2'
              )}
            >
              {collection.description}
            </p>
            <div className="mt-4">
              <Button
                className={'text-sm font-medium underline hover:opacity-80'}
                onPress={() => setVisible(!isVisible)}
              >
                Shore {`${isVisible ? 'less' : 'more'}`}
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </Container>
  );
};
