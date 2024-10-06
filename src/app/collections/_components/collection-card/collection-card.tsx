'use client';
import { Collection } from '@/shopify/types';
import Image from 'next/image';
import { Link } from 'react-aria-components';

type CollectionCardProps = {
  collection: Collection;
};

export const CollectionCard = ({ collection }: CollectionCardProps) => {
  return (
    <Link
      href={collection.path}
      className="group rounded-card bg-white p-4 shadow-lg transition-all duration-150 will-change-transform data-[hovered=true]:-translate-y-2 data-[hovered=true]:shadow-xl"
    >
      <div className="aspect-h-1 aspect-w-1 flex items-center justify-center overflow-hidden rounded-card bg-neutral-100 transition-opacity duration-150 group-hover:opacity-75">
        {collection.image ? (
          <Image
            fill
            src={collection.image.url}
            alt={collection.image.altText || collection.title}
            className="h-full w-full object-cover object-center"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-medium text-neutral-500">No image available</span>
          </div>
        )}
      </div>
      <div className="mt-4 text-center">
        <h3 className="font-heading">{collection.title}</h3>
      </div>
    </Link>
  );
};
