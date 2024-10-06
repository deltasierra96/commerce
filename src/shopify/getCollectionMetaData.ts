import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCollection } from './getCollection';

export const getCollectionMetaData = async (handle: string): Promise<Metadata> => {
  const collection = await getCollection(handle);

  if (!collection) return notFound();

  return {
    title: collection.seo?.title || collection.title,
    description:
      collection.seo?.description || collection.description || `${collection.title} products`
  };
};
