'use client';
import { Icon } from '@/components/ui/icon';
import { Collection } from '@/shopify/types';
import Image from 'next/image';
import { Link } from 'react-aria-components';

type CollectionCardProps = {
  collection: Collection;
};

export const CollectionCard = ({ collection }: CollectionCardProps) => {
  console.log('collection', collection);
  return (
    <Link
      href={collection.path}
      className="group overflow-hidden rounded-lg border border-neutral-100 bg-white transition-all duration-150 will-change-transform hover:border-neutral-200"
    >
      <div className="aspect-h-1 aspect-w-1 flex items-center justify-center overflow-hidden bg-neutral-50">
        {collection.image ? (
          <Image
            fill
            src={collection.image.url}
            alt={collection.image.altText || collection.title}
            className="h-full w-full object-cover object-center transition-transform duration-150 group-data-[hovered=true]:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon icon="photo" className={'h-10 w-10 opacity-10 grayscale'} />
          </div>
        )}
      </div>
      <div className="flex items-center justify-between gap-4 p-8 text-left">
        <div className="space-y-2">
          <h3 className="tracking-heading font-heading text-2xl group-data-[hovered=true]:underline">
            {collection.title}
          </h3>
          {collection.description ? (
            <p className="line-clamp-1 text-sm">{collection.description.substring(0, 100)}</p>
          ) : null}
        </div>
        <Icon
          icon="arrow-right"
          className="h-4 w-4 shrink-0 transition-all group-data-[hovered=true]:rotate-90"
        />
      </div>
    </Link>
  );
};
