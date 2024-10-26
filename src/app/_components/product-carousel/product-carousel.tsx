import { getCollection } from '@/shopify/getCollection';
import { getCollectionProducts } from '@/shopify/getCollectionProducts';
import { Carousel } from './_components/carousel';

export async function ProductCarousel() {
  const products = await getCollectionProducts({
    collection: 'hidden-homepage-carousel',
    limit: 10
  });

  const collection = await getCollection('hidden-homepage-carousel');

  if (!products?.length) return null;

  return <Carousel items={products} />;
}
